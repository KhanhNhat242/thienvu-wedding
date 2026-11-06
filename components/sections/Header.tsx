"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Logo from "@/components/ui/Logo";
import { IconClose, IconMenu } from "@/components/ui/Icons";
import { btnPrimary, container } from "@/components/ui/styles";
import { BOOKING_ANCHOR, navItems } from "@/lib/site-config";

/**
 * FR-08 — Header cố định, menu neo, CTA "Đặt lịch ngay".
 * Trong phạm vi Hero: header trong suốt (hoà vào Hero), ẩn nút "Đặt lịch ngay", menu dồn hết sang phải.
 * Ra khỏi Hero: nền ngà, nút hiện lại, menu trượt về giữa.
 * Hiệu ứng bằng transition flex-grow của 2 khoảng đệm hai bên menu.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [inHero, setInHero] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const hero = document.getElementById("trang-chu");
      const headerH = headerRef.current?.offsetHeight ?? 0;
      // Còn trong Hero khi mép dưới header chưa vượt quá đáy Hero
      setInHero(hero ? window.scrollY + headerH < hero.offsetTop + hero.offsetHeight - 1 : false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Menu di động mở: khoá cuộn trang, Esc để đóng, tự đóng khi màn hình chuyển sang desktop
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add("menu-open");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      root.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  /** Bấm mục menu: mở khoá cuộn trước rồi mới cuộn tới khu vực (tránh bị khoá chặn lại) */
  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.documentElement.classList.remove("menu-open");
    setOpen(false);
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  };

  return (
    <header
      ref={headerRef}
      data-in-hero={inHero}
      className={`sticky top-0 z-50 h-(--header-h) border-b transition-[background-color,border-color] duration-500 ${
        open
          ? "border-line bg-ivory"
          : inHero
            ? "border-transparent bg-ivory lg:bg-transparent"
            : scrolled
              ? "border-line bg-ivory/90 backdrop-blur-md"
              : "border-transparent bg-ivory"
      }`}
    >
      <div className={`${container} flex h-full items-center gap-6`}>
        <a href="#" aria-label="Về đầu trang" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <span
          aria-hidden
          className={`hidden h-px transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:block grow`}
        />
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
        <span
          aria-hidden
          className={`hidden h-px transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:block ${inHero ? "grow-0" : "grow"}`}
        />

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          {/* Ẩn trong Hero (Hero đã có CTA riêng), hiện lại khi cuộn qua */}
          <div
            className={`overflow-hidden transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              inHero ? "pointer-events-none max-w-0 opacity-0" : "max-w-[200px] opacity-100"
            }`}
            aria-hidden={inHero}
          >
            <a
              href={BOOKING_ANCHOR}
              tabIndex={inHero ? -1 : undefined}
              className={`${btnPrimary} h-10! px-4! text-[13px]! sm:h-11! sm:px-6! sm:text-[14px]!`}
            >
              Đặt lịch ngay
            </a>
          </div>
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
        className={`absolute inset-x-0 top-full flex h-[calc(100dvh-var(--header-h))] origin-top flex-col overflow-y-auto overscroll-contain bg-ivory transition-all duration-300 lg:hidden ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        <nav aria-label="Điều hướng di động" className={`${container} flex flex-1 flex-col py-6`}>
          <ul className="mb-8 divide-y divide-line">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => goTo(e, item.href)}
                  className="flex items-center justify-between py-4 font-serif text-[1.6rem] text-ink"
                >
                  {item.label}
                  <span aria-hidden className="text-moss">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={BOOKING_ANCHOR} onClick={(e) => goTo(e, BOOKING_ANCHOR)} className={`${btnPrimary} mt-auto w-full`}>
            Đặt lịch ngay
          </a>
        </nav>
      </div>
    </header>
  );
}
