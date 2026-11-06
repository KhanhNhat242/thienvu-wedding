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
        requestBooking(prefill);
      }}
    >
      {children}
    </a>
  );
}
