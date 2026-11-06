"use client";

import Image from "next/image";
import { useState } from "react";
import { requestBooking } from "@/lib/booking-events";
import SectionHeading from "@/components/ui/SectionHeading";
import { container, headingGap, linkArrow } from "@/components/ui/styles";
import { outfits, outfitTabs, type OutfitCategory } from "@/data/content";
import { nb } from "@/lib/typography";

/** FR-04 — Bộ sưu tập váy cưới & trang phục. Nền kem. */
export default function Outfits() {
  const [tab, setTab] = useState<OutfitCategory>("vay-cuoi");
  const items = outfits.filter((o) => o.category === tab);

  return (
    <section id="trang-phuc" aria-labelledby="outfits-title" className="bg-cream py-16 sm:py-20 lg:py-24">
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
                onClick={() => setTab(t.id)}
                className={`-mb-px h-11 border-b-2 text-[14px] tracking-wide whitespace-nowrap transition-colors ${
                  active ? "border-moss text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div key={tab} className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-7 lg:gap-y-14">
          {items.map((o, i) => (
            <article
              key={o.id}
              className="fade-up w-[calc(50%-8px)] sm:w-[calc(50%-12px)] lg:w-[calc(25%-21px)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-sand">
                <Image
                  src={o.image}
                  alt={o.alt}
                  fill
                  style={{ objectPosition: o.position }}
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-[11.5px] font-medium tracking-[0.2em] text-muted tabular-nums">{o.id}</p>
              <h3 className="mt-1 font-serif text-[1.2rem] leading-snug font-medium text-ink sm:text-[1.4rem]">
                {nb(o.name)}
              </h3>
              <p className="mt-1 text-[13px] text-muted sm:text-[14px]">{nb(o.style)}</p>
              <button
                type="button"
                onClick={() => requestBooking({ note: `Tôi muốn hỏi thuê mẫu ${o.name} – ${o.id}.` })}
                className={`${linkArrow} mt-3 text-[13px]!`}
              >
                Hỏi thuê mẫu này
                <span aria-hidden>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
