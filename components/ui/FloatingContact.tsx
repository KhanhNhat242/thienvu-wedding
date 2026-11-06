import { IconMessenger, IconPhone, IconZalo } from "./Icons";
import { siteConfig } from "@/lib/site-config";

/**
 * FR-05 — Liên hệ nhanh: Gọi · Zalo · Messenger. Phẳng, không nhấp nháy.
 * Mobile: thanh 3 nút ở mép dưới (không che chữ/nút trong trang). ≥ 640px: cột 3 nút 48×48 ở góc phải.
 */
export default function FloatingContact() {
  const items = [
    { href: siteConfig.phoneHref, label: "Gọi ngay", aria: `Gọi ${siteConfig.phoneDisplay}`, className: "bg-moss text-ivory", icon: <IconPhone className="size-[20px]" />, external: false },
    { href: siteConfig.zaloHref, label: "Zalo", aria: "Nhắn tin Zalo", className: "bg-[#0068FF] text-white", icon: <IconZalo className="size-7" />, external: true },
    { href: siteConfig.messengerHref, label: "Messenger", aria: "Nhắn tin Messenger", className: "bg-[#0084FF] text-white", icon: <IconMessenger className="size-[22px]" />, external: true },
  ];

  return (
    <nav
      aria-label="Liên hệ nhanh"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ivory pb-[env(safe-area-inset-bottom)] sm:inset-x-auto sm:right-5 sm:bottom-6 sm:flex sm:flex-col sm:gap-3 sm:border-0 sm:pb-0"
    >
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          aria-label={it.aria}
          title={it.aria}
          {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`flex h-12 items-center justify-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-90 sm:size-12 sm:rounded-[4px] sm:ring-1 sm:ring-ivory ${it.className}`}
        >
          {it.icon}
          {it.label !== "Zalo" && <span className="sm:hidden">{it.label}</span>}
        </a>
      ))}
    </nav>
  );
}
