// Validate form đặt lịch (FR-01) — dùng chung cho client và server

import { NO_PACKAGE, packages } from "@/data/content";

export type BookingField = "name" | "phone" | "package" | "date" | "note";
export type BookingErrors = Partial<Record<BookingField, string>>;
export type BookingInput = Record<BookingField, string>;

export const packageOptions = [
  ...packages.map((p) => ({ value: p.id, label: p.name })),
  { value: NO_PACKAGE.id, label: NO_PACKAGE.name },
];

/** Số di động VN: 0 hoặc +84 + đầu 3/5/7/8/9 + 8 số */
const PHONE_RE = /^(?:0|\+?84)(?:3|5|7|8|9)\d{8}$/;
const DATE_RE = /^(\d{2})\/(\d{2})\/(\d{4})$/;

export const normalizePhone = (v: string) => v.replace(/[\s.\-()]/g, "");

/** Ngày hôm nay theo giờ Việt Nam, dạng YYYY-MM-DD */
export function todayInVietnam(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** "DD/MM/YYYY" -> "YYYY-MM-DD" hoặc null nếu sai */
export function parseVnDate(v: string): string | null {
  const m = DATE_RE.exec(v.trim());
  if (!m) return null;
  const [, d, mo, y] = m;
  const date = new Date(Date.UTC(+y, +mo - 1, +d));
  if (date.getUTCDate() !== +d || date.getUTCMonth() !== +mo - 1) return null;
  return `${y}-${mo}-${d}`;
}

export function validateBooking(input: BookingInput, today = todayInVietnam()): BookingErrors {
  const errors: BookingErrors = {};
  const name = input.name.trim();
  if (name.length < 2) errors.name = "Vui lòng nhập họ và tên.";
  else if (name.length > 60) errors.name = "Họ tên tối đa 60 ký tự.";

  if (!input.phone.trim()) errors.phone = "Vui lòng nhập số điện thoại.";
  else if (!PHONE_RE.test(normalizePhone(input.phone))) errors.phone = "Số điện thoại chưa đúng, ví dụ: 0974 569 193.";

  if (!packageOptions.some((o) => o.value === input.package)) errors.package = "Vui lòng chọn gói chụp.";

  if (!input.date) errors.date = "Vui lòng chọn ngày dự kiến.";
  else {
    const iso = parseVnDate(input.date);
    if (!iso) errors.date = "Ngày chưa đúng định dạng DD/MM/YYYY.";
    else if (iso < today) errors.date = "Ngày dự kiến không được ở quá khứ.";
  }

  if (input.note.length > 500) errors.note = "Ghi chú tối đa 500 ký tự.";
  return errors;
}
