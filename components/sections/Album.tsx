"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
import SectionHeading from "@/components/ui/SectionHeading";
import { container, headingGap } from "@/components/ui/styles";
import { albumFilters, albumPhotos } from "@/data/content";

/**
 * Ô Bento cho desktop (lưới 4 cột): mỗi khối 8 ảnh lấp kín đúng 4×4 ô, khối chẵn/lẻ đảo chiều.
 * Khối 4 ảnh (khi lọc) dùng 4 ô 2×2. Mobile/tablet: lưới 2 cột, cứ 3 ảnh có 1 ảnh ngang.
 */
const BLOCK_A = ["lg:col-span-2 lg:row-span-2", "lg:row-span-2", "lg:row-span-2", "lg:col-span-2", "", "", "lg:col-span-2", "lg:col-span-2"];
const BLOCK_B = ["lg:row-span-2", "lg:row-span-2", "lg:col-span-2 lg:row-span-2", "", "", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];
const QUAD = "lg:col-span-2 lg:row-span-2";

function desktopSpan(i: number, count: number) {
  const full = Math.floor(count / 8) * 8;
  if (i >= full) return QUAD; // phần dư 4 ảnh
  const block = Math.floor(i / 8);
  return (block % 2 === 0 ? BLOCK_A : BLOCK_B)[i % 8];
}

function mobileSpan(i: number, count: number) {
  const full = Math.floor(count / 3) * 3;
  const rest = count - full;
  if (i >= full) return rest === 1 ? "col-span-2" : "";
  return i % 3 === 0 ? "col-span-2" : "";
}

/** Ghép lớp span; reset col-span của mobile khi desktop không đặt col-span riêng */
function spanClasses(i: number, count: number) {
  const d = desktopSpan(i, count);
  return `${mobileSpan(i, count)} ${d.includes("col-span") ? "" : "lg:col-span-1"} ${d}`;
}

/** FR-03 — Album lọc theo loại (Bento Box Grid). Nền ngà. */
export default function Album() {
  const [filter, setFilter] = useState<(typeof albumFilters)[number]["id"]>("all");
  const [open, setOpen] = useState<number | null>(null);

  const photos = useMemo(
    () => (filter === "all" ? albumPhotos : albumPhotos.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="album" aria-labelledby="album-title" className="bg-ivory py-16 sm:py-20 lg:py-[110px]">
      <div className={container}>
        <SectionHeading
          id="album-title"
          title="Câu Chuyện Tình Yêu Qua Ống Kính"
          description="Chạm vào từng bức ảnh để cảm nhận trọn vẹn ánh sáng và cảm xúc."
        />

        <div
          role="tablist"
          aria-label="Lọc album theo loại"
          className={`${headingGap} flex justify-center gap-6 border-b border-ink/10 sm:gap-10`}
        >
          {albumFilters.map((f) => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`-mb-px h-11 border-b-2 text-[14px] tracking-wide whitespace-nowrap transition-colors ${
                  active ? "border-moss text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div
          key={filter}
          className="mt-10 grid auto-rows-[44vw] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:gap-4 lg:auto-rows-[210px] lg:grid-cols-4 lg:gap-5"
        >
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Xem lớn: ${p.alt}`}
              className={`fade-up group relative overflow-hidden rounded-[2px] bg-sand ${spanClasses(i, photos.length)}`}
              style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                style={{ objectPosition: p.position ?? "50% 30%" }}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox items={photos} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </section>
  );
}
