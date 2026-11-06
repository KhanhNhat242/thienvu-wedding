"use client";

import { useEffect, useRef, useState } from "react";
import BounceCards from "@/components/reactbits/BounceCards";
import Lightbox from "@/components/ui/Lightbox";
import SectionHeading from "@/components/ui/SectionHeading";
import { container, headingGap, linkArrow } from "@/components/ui/styles";
import { outfits, outfitTabs, type OutfitCategory } from "@/data/content";
import { requestBooking } from "@/lib/booking-events";
import { nb } from "@/lib/typography";

/** URL ảnh đã tối ưu bởi Next (WebP/AVIF, rộng 640px) — BounceCards dùng <img> thường */
const optimized = (src: string) => `/_next/image?url=${encodeURIComponent(src)}&w=640&q=75`;

/** Kích thước bộ thẻ theo chiều rộng khả dụng và số mẫu (để 8 mẫu vẫn vừa màn hình điện thoại) */
function layoutFor(width: number, count: number) {
  const cardSize = Math.round(Math.min(230, Math.max(130, width * 0.26)));
  const spread = count > 1 ? Math.min(cardSize * 0.55, (width - cardSize - 16) / (count - 1)) : 0;
  return {
    cardSize,
    spread: Math.round(spread),
    pushDistance: Math.round(cardSize * 0.7),
    height: Math.round(cardSize * 1.55),
  };
}

/**
 * FR-04 — Bộ sưu tập trang phục. Nền kem.
 * Ảnh mỗi nhóm hiển thị bằng BounceCards (React Bits): xoè thẻ, bật nảy khi xuất hiện,
 * hover nâng thẻ và đẩy thẻ bên cạnh. Nhấn vào thẻ: mở popup xem ảnh lớn + thông tin mẫu hiện bên dưới.
 */
export default function Outfits() {
  const [tab, setTab] = useState<OutfitCategory>("vay-cuoi");
  const [selected, setSelected] = useState(0);
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const items = outfits.filter((o) => o.category === tab);
  const current = items[Math.min(selected, items.length - 1)];
  const layout = layoutFor(width, items.length);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.min(960, Math.round(entry.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="trang-phuc" aria-labelledby="outfits-title" className="overflow-x-clip bg-cream py-16 sm:py-20 lg:py-24">
      <div className={container}>
        <SectionHeading
          id="outfits-title"
          title="Bộ Sưu Tập Trang Phục Cưới"
          description="Thiết kế tôn dáng, chất liệu ren và voan cao cấp giúp cô dâu tỏa sáng."
        />

        <div
          role="tablist"
          aria-label="Loại trang phục"
          className={`${headingGap} flex justify-center gap-6 border-b border-ink/10 sm:gap-10`}
        >
          {outfitTabs.map((t) => {
            const active = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setTab(t.id);
                  setSelected(0);
                }}
                className={`-mb-px h-11 border-b-2 text-[14px] tracking-wide whitespace-nowrap transition-colors ${
                  active ? "border-moss text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Bộ thẻ xoè */}
        <div ref={stageRef} className="outfit-bounce mx-auto mt-8 flex w-full max-w-[960px] justify-center sm:mt-10">
          {width > 0 ? (
            <BounceCards
              key={`${tab}-${layout.cardSize}`}
              images={items.map((o) => ({ src: optimized(o.image), alt: `${o.name} – ${o.id}` }))}
              containerWidth={width}
              containerHeight={layout.height}
              cardSize={layout.cardSize}
              spread={layout.spread}
              rotation={10}
              arc={0}
              pushDistance={layout.pushDistance}
              hoverScale={1.06}
              bounciness={0.6}
              animationDelay={0.3}
              animationStagger={0.06}
              borderWidth={5}
              borderColor="#FFFDF9"
              radius={25}
              shadow
              enableHover
              onCardClick={(i: number) => {
                setSelected(i);
                setOpen(i);
              }}
            />
          ) : (
            <div style={{ height: layoutFor(360, items.length).height }} />
          )}
        </div>

        {/* Thông tin mẫu đang chọn */}
        {current && (
          <div key={current.id} className="fade-up mx-auto mt-4 max-w-[480px] text-center" aria-live="polite">
            <p className="text-[11.5px] font-medium tracking-[0.2em] text-muted tabular-nums">{current.id}</p>
            <h3 className="mt-1 font-serif text-[1.6rem] leading-snug font-medium text-ink sm:text-[1.9rem]">
              {nb(current.name)}
            </h3>
            <p className="mt-1 text-[14px] text-muted">{nb(current.style)}</p>
            <button
              type="button"
              onClick={() => requestBooking({ note: `Tôi muốn hỏi thuê mẫu ${current.name} – ${current.id}.` })}
              className={`${linkArrow} mt-4`}
            >
              Hỏi thuê mẫu này
              <span aria-hidden>→</span>
            </button>
            {items.length > 1 && (
              <p className="mt-5 text-[12.5px] text-muted">{nb("Nhấn vào từng ảnh để xem ảnh lớn và thông tin mẫu.")}</p>
            )}
          </div>
        )}
      </div>

      {open !== null && (
        <Lightbox
          items={items.map((o) => ({ src: o.image, alt: o.alt, label: `${o.name} – ${o.id}` }))}
          index={open}
          onClose={() => setOpen(null)}
          onChange={(i) => {
            setOpen(i);
            setSelected(i);
          }}
        />
      )}
    </section>
  );
}
