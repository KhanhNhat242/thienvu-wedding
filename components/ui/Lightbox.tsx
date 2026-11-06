"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { IconChevron, IconClose } from "./Icons";

export type LightboxItem = { src: string; alt: string; label?: string };

/** Xem ảnh lớn: ←/→ chuyển ảnh, Esc đóng, vuốt trên điện thoại */
export default function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const item = items[index];

  const go = useCallback(
    (dir: 1 | -1) => onChange((index + dir + items.length) % items.length),
    [index, items.length, onChange],
  );

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      prevFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  if (!item) return null;

  const navBtn =
    "absolute top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-[2px] bg-ivory/10 text-ivory transition hover:bg-ivory/25";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1b1a18]/92 p-4 sm:p-10"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Đóng"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 grid size-12 place-items-center rounded-[2px] bg-ivory/10 text-ivory transition hover:bg-ivory/25"
      >
        <IconClose />
      </button>

      <button
        type="button"
        aria-label="Ảnh trước"
        className={`${navBtn} left-3 sm:left-6`}
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
      >
        <IconChevron dir="left" />
      </button>

      <figure
        key={item.src}
        className="lightbox-fade relative flex h-full max-h-[86vh] w-full max-w-[min(86vh,1000px)] flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1">
          <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 1000px, 100vw" className="object-contain" />
        </div>
        <figcaption className="mt-4 flex items-center justify-between gap-4 text-[13px] text-ivory/75">
          <span>{item.label}</span>
          <span aria-live="polite">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Ảnh tiếp theo"
        className={`${navBtn} right-3 sm:right-6`}
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
      >
        <IconChevron dir="right" />
      </button>
    </div>
  );
}
