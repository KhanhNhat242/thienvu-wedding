"use client";

import type { ReactNode } from "react";
import { requestBooking, type BookingPrefill } from "@/lib/booking-events";

/** Nút cuộn tới form và điền sẵn gói / ghi chú */
export default function BookingTrigger({
  prefill,
  className,
  children,
  ariaLabel,
}: {
  prefill: BookingPrefill;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href="#dat-lich"
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        // Không để click lan lên thẻ cha (vd. thẻ giá lật được) — nút chỉ mở form đặt lịch
        e.stopPropagation();
        requestBooking(prefill);
      }}
    >
      {children}
    </a>
  );
}
