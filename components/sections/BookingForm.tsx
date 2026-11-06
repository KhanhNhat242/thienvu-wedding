"use client";

import { DatePicker, Input, Select } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { useActionState, useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { submitBooking, type BookingState } from "@/app/actions/booking";
import { IconArrow, IconCheck } from "@/components/ui/Icons";
import { btnPrimary } from "@/components/ui/styles";
import { BOOKING_EVENT, type BookingPrefill } from "@/lib/booking-events";
import {
  packageOptions,
  validateBooking,
  type BookingErrors,
  type BookingField,
} from "@/lib/booking-validation";
import { siteConfig } from "@/lib/site-config";
import { nb } from "@/lib/typography";

const DATE_FORMAT = "DD/MM/YYYY";
const initialState: BookingState = { status: "idle" };

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-medium tracking-wide text-ink/80">
        {label}
        {required && <span className="ml-0.5 text-[#A8452F]">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12.5px] text-[#A8452F]">
          {error}
        </p>
      )}
    </div>
  );
}

/** FR-01 — Form đặt lịch chụp / tư vấn */
export default function BookingForm() {
  const [state, formAction, pending] = useActionState(submitBooking, initialState);
  const [dismissed, setDismissed] = useState<BookingState | null>(null);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pkg, setPkg] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [note, setNote] = useState("");
  const [clientErrors, setClientErrors] = useState<BookingErrors>({});

  // Nhận điền sẵn từ "Đặt lịch gói này" / "Hỏi thuê mẫu này"
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const { packageId, note: prefNote } = (e as CustomEvent<BookingPrefill>).detail ?? {};
      setDismissed(stateRef.current);
      if (packageId) {
        setPkg(packageId);
        setClientErrors((er) => ({ ...er, package: undefined }));
      }
      if (prefNote) setNote(prefNote);
    };
    window.addEventListener(BOOKING_EVENT, onPrefill);
    return () => window.removeEventListener(BOOKING_EVENT, onPrefill);
  }, []);

  const serverErrors = state.status === "error" && state !== dismissed ? state.errors ?? {} : {};
  const errors: BookingErrors = { ...serverErrors, ...clientErrors };
  const clear = (f: BookingField) => setClientErrors((er) => ({ ...er, [f]: undefined }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const found = validateBooking({
      name,
      phone,
      package: pkg ?? "",
      date: date ? date.format(DATE_FORMAT) : "",
      note,
    });
    if (Object.keys(found).length > 0) {
      e.preventDefault();
      setClientErrors(found);
      return;
    }
    setClientErrors({});
    setDismissed(null);
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setPkg(undefined);
    setDate(null);
    setNote("");
    setClientErrors({});
    setDismissed(state);
  };

  if (state.status === "success" && state !== dismissed) {
    return (
      <div className="fade-up flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
        <IconCheck className="size-10 text-moss" />
        <h3 className="mt-6 font-serif text-[1.9rem] leading-tight text-ink">{nb("Đã nhận yêu cầu của hai bạn")}</h3>
        <p className="mt-3 max-w-[380px] text-[15px] leading-relaxed text-muted">{nb(state.message ?? "")}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={siteConfig.zaloHref} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            Nhắn Zalo ngay
          </a>
          <button type="button" onClick={resetForm} className="h-12 px-5 text-[14px] text-moss underline-offset-4 hover:underline">
            Gửi yêu cầu khác
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className="space-y-5">
      <Field id="bk-name" label="Họ và tên" required error={errors.name}>
        <Input
          id="bk-name"
          name="name"
          autoComplete="name"
          placeholder="Ví dụ: Nguyễn Thu Hà"
          value={name}
          status={errors.name ? "error" : undefined}
          aria-invalid={!!errors.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
            clear("name");
          }}
        />
      </Field>

      <Field id="bk-phone" label="Số điện thoại / Zalo" required error={errors.phone}>
        <Input
          id="bk-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Ví dụ: 0974 569 193"
          value={phone}
          status={errors.phone ? "error" : undefined}
          aria-invalid={!!errors.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPhone(e.target.value);
            clear("phone");
          }}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="bk-package" label="Gói chụp" required error={errors.package}>
          <Select
            id="bk-package"
            className="w-full"
            placeholder="Chọn gói chụp"
            options={packageOptions}
            value={pkg}
            status={errors.package ? "error" : undefined}
            onChange={(v: string) => {
              setPkg(v);
              clear("package");
            }}
          />
          <input type="hidden" name="package" value={pkg ?? ""} />
        </Field>

        <Field id="bk-date" label="Ngày dự kiến" required error={errors.date}>
          <DatePicker
            id="bk-date"
            className="w-full"
            format={DATE_FORMAT}
            placeholder="DD/MM/YYYY"
            inputReadOnly
            value={date}
            status={errors.date ? "error" : undefined}
            disabledDate={(d) => d.isBefore(dayjs().startOf("day"))}
            onChange={(d) => {
              setDate(d);
              clear("date");
            }}
          />
          <input type="hidden" name="date" value={date ? date.format(DATE_FORMAT) : ""} />
        </Field>
      </div>

      <Field id="bk-note" label="Ghi chú" error={errors.note}>
        <Input.TextArea
          id="bk-note"
          name="note"
          rows={3}
          maxLength={500}
          placeholder="Concept yêu thích, địa điểm muốn chụp, mẫu váy quan tâm…"
          value={note}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setNote(e.target.value);
            clear("note");
          }}
        />
      </Field>

      <button type="submit" disabled={pending} className={`${btnPrimary} w-full disabled:opacity-70`}>
        {pending ? "Đang gửi…" : "Gửi yêu cầu đặt lịch"}
        {!pending && <IconArrow className="size-4" />}
      </button>
      <p className="text-center text-[12.5px] text-muted">{nb("Thông tin của hai bạn chỉ dùng để Thiên Vũ liên hệ tư vấn.")}</p>
    </form>
  );
}
