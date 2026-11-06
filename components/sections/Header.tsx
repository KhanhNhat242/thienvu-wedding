"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { IconClose, IconMenu } from "@/components/ui/Icons";
import { btnPrimary, container } from "@/components/ui/styles";
import { BOOKING_ANCHOR, navItems } from "@/lib/site-config";

/** FR-08 — Header cố định, nền trắng mờ, menu neo, CTA "Đặt lịch ngay" */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 h-(--header-h) border-b transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled || open
          ? "border-line bg-ivory/90 backdrop-blur-md"
          : "border-transparent bg-ivory"
      }`}
    >
      <div className={`${container} flex h-full items-center justify-between gap-6`}>
        <a href="#" aria-label="Về đầu trang" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative py-2 text-[13.5px] tracking-wide text-ink/80 transition-colors hover:text-moss"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-moss transition-transform duration-300 group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={BOOKING_ANCHOR} className={`${btnPrimary} h-10! px-4! text-[13px]! sm:h-11! sm:px-6! sm:text-[14px]!`}>
            Đặt lịch ngay
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[2px] text-ink transition-colors hover:bg-cream lg:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="menu-di-dong"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Tiến trình đọc trang (Storytelling) */}
      <span aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-[2px] bg-moss" />

      {/* Menu di động */}
      <div
        id="menu-di-dong"
        className={`absolute inset-x-0 top-full origin-top border-b border-line bg-ivory transition-all duration-300 lg:hidden ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        <nav aria-label="Điều hướng di động" className={`${container} py-4`}>
          <ul className="divide-y divide-line">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 font-serif text-xl text-ink"
                >
                  {item.label}
                  <span aria-hidden className="text-moss">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={BOOKING_ANCHOR} onClick={() => setOpen(false)} className={`${btnPrimary} mt-4 w-full`}>
            Đặt lịch ngay
          </a>
        </nav>
      </div>
    </header>
  );
}
