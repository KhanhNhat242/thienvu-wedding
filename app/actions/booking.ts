"use server";

import { validateBooking, type BookingErrors, type BookingInput } from "@/lib/booking-validation";

export type BookingState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: BookingErrors;
};

const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");

/** FR-01 — Nhận yêu cầu đặt lịch. Validate lại phía server. */
export async function submitBooking(_prev: BookingState, formData: FormData): Promise<BookingState> {
  const input: BookingInput = {
    name: str(formData.get("name")),
    phone: str(formData.get("phone")),
    package: str(formData.get("package")),
    date: str(formData.get("date")),
    note: str(formData.get("note")),
  };

  const errors = validateBooking(input);
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, message: "Vui lòng kiểm tra lại thông tin." };
  }

  // TODO(Q5): chưa có nơi nhận dữ liệu (email / Google Sheet / Zalo OA).
  // Khi có cấu hình: gửi `input` tới kênh đó tại đây. Không log SĐT khách ra console (NFR-05).

  return {
    status: "success",
    message: "Cảm ơn hai bạn! Thiên Vũ sẽ liên hệ qua Zalo hoặc số điện thoại trong thời gian sớm nhất.",
  };
}
