"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
import SectionHeading from "@/components/ui/SectionHeading";
import { container, headingGap } from "@/components/ui/styles";
import { albumPhotos } from "@/data/content";

/**
 * Bố cục trái tim trên lưới 10 cột × 9 hàng (ô vuông). Mỗi ô: [cột, hàng, số cột, số hàng].
 * 21 ô ảnh lấp kín hình trái tim; ô chóp dưới cùng là nút "Xem thêm".
 *
 *   hàng 1:  . A A B . . E E F .
 *   hàng 2:  C A A D D G E E H H
 *   hàng 3:  C J J D D I I I H H
 *   hàng 4:  K K L L L I I I M M
 *   hàng 5:  K K L L L I I I N O
 *   hàng 6:  . P L L L Q Q Q N .
 *   hàng 7:  . . R R S Q Q Q . .
 *   hàng 8:  . . . T S U U . . .
 *   hàng 9:  . . . . ★ ★ . . . .   (★ = nút Xem thêm)
 */
const HEART: [number, number, number, number][] = [
  [2, 1, 2, 2], // A
  [4, 1, 1, 1], // B
  [7, 1, 2, 2], // E
  [9, 1, 1, 1], // F
  [1, 2, 1, 2], // C
  [4, 2, 2, 2], // D
  [6, 2, 1, 1], // G
  [9, 2, 2, 2], // H
  [2, 3, 2, 1], // J
  [6, 3, 3, 3], // I — ô lớn
  [1, 4, 2, 2], // K
  [3, 4, 3, 3], // L — ô lớn
  [9, 4, 2, 1], // M
  [9, 5, 1, 2], // N
  [10, 5, 1, 1], // O
  [2, 6, 1, 1], // P
  [6, 6, 3, 2], // Q
  [3, 7, 2, 1], // R
  [5, 7, 1, 2], // S
  [4, 8, 1, 1], // T
  [6, 8, 2, 1], // U
];
const MORE_CELL: [number, number, number, number] = [5, 9, 2, 1];

const area = ([c, r, cs, rs]: [number, number, number, number]) => ({
  gridColumn: `${c} / span ${cs}`,
  gridRow: `${r} / span ${rs}`,
});

/** FR-03 — Album ảnh bố cục trái tim, bấm ảnh mở Lightbox; "Xem thêm" mở tiếp các ảnh còn lại. Nền ngà. */
export default function Album() {
  const [open, setOpen] = useState<number | null>(null);
  const shown = albumPhotos.slice(0, HEART.length);
  const remaining = albumPhotos.length - shown.length;

  return (
    <section id="album" aria-labelledby="album-title" className="bg-ivory py-16 sm:py-20 lg:py-[110px]">
      <div className={container}>
        <SectionHeading
          id="album-title"
          title="Câu Chuyện Tình Yêu Qua Ống Kính"
          description="Chạm vào từng bức ảnh để cảm nhận trọn vẹn ánh sáng và cảm xúc."
        />

        <div
          className={`${headingGap} mx-auto grid aspect-[10/9] w-full max-w-[880px] grid-cols-10 grid-rows-9 gap-1 sm:gap-2 lg:gap-2.5`}
        >
          {shown.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Xem lớn: ${p.alt}`}
              style={{ ...area(HEART[i]), animationDelay: `${Math.min(i, 12) * 40}ms` }}
              className="fade-up group relative overflow-hidden rounded-[2px] bg-sand"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes={HEART[i][2] >= 3 ? "(min-width: 1024px) 270px, 30vw" : "(min-width: 1024px) 180px, 20vw"}
                className="object-cover object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </button>
          ))}

          {/* Chóp trái tim: nút "Xem thêm" — mở popup từ ảnh tiếp theo. Mobile: nới vùng chạm ≥ 44px bằng ::after */}
          {remaining > 0 && (
            <button
              type="button"
              onClick={() => setOpen(shown.length)}
              style={area(MORE_CELL)}
              className="relative flex flex-col items-center justify-center rounded-[2px] bg-moss text-ivory transition-colors after:absolute after:-inset-x-1 after:-inset-y-2 after:content-[''] hover:bg-moss-dark focus-visible:outline-2 focus-visible:outline-offset-2 sm:after:hidden"
              aria-label={`Xem thêm ${remaining} ảnh`}
            >
              <span className="font-serif text-[clamp(0.85rem,2.4vw,1.5rem)] leading-none italic">Xem thêm</span>
              <span className="mt-1 text-[clamp(0.6rem,1.2vw,0.8rem)] tracking-wide opacity-85">+{remaining} ảnh</span>
            </button>
          )}
        </div>
      </div>

      {open !== null && (
        <Lightbox items={albumPhotos} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </section>
  );
}
