// Cầu nối giữa các nút "Đặt lịch gói này" / "Hỏi thuê mẫu này" và form đặt lịch (FR-01, FR-02, FR-04)

export const BOOKING_EVENT = "tv:booking-prefill";

export type BookingPrefill = { packageId?: string; note?: string };

export function requestBooking(detail: BookingPrefill) {
  window.dispatchEvent(new CustomEvent<BookingPrefill>(BOOKING_EVENT, { detail }));
  document.getElementById("dat-lich")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
