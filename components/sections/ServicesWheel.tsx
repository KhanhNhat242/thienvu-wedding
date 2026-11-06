"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { services } from "@/data/content";
import { nb } from "@/lib/typography";

/*
 * Dịch vụ (desktop ≥ 1024px) — 2 phần, theo ảnh mẫu bố cục:
 * - Trái: NỬA bánh xe ảnh (tâm đặt sát mép trái màn hình → chỉ lộ nửa phải hình tròn).
 *   Vòng đủ 10 ô (5 dịch vụ lặp 2 lần) để nửa đang hiện luôn kín ảnh khi quay.
 * - Phải: tiêu đề + mô tả section, bên dưới là tên & mô tả dịch vụ đang ở vị trí 3 giờ.
 * Section được ghim (sticky) trong lúc cuộn; tiến độ cuộn quay bánh xe.
 * Ảnh xoay ngược để luôn đứng thẳng. Cập nhật bằng biến CSS --rot (không render lại React mỗi khung hình).
 */

const N = services.length;
const WEDGES = N * 2; // 10 ô quanh vòng tròn
const STEP = 360 / WEDGES; // 36°
const GAP = 3; // khe giữa các ô (độ)
const R_OUT = 0.5; // bán kính ngoài (đơn vị hộp vuông 0..1)
const R_IN = 0.2; // bán kính trong
const R_MID = (R_OUT + R_IN) / 2;

const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (deg: number, r: number) =>
  `${(0.5 + r * Math.cos(rad(deg))).toFixed(4)},${(0.5 + r * Math.sin(rad(deg))).toFixed(4)}`;

/** Hình quạt vành khuyên quanh tâm (0.5, 0.5), góc tính từ hướng 3 giờ, chiều kim đồng hồ */
function sectorPath(center: number) {
  const a0 = center - STEP / 2 + GAP / 2;
  const a1 = center + STEP / 2 - GAP / 2;
  return `M${pt(a0, R_OUT)} A${R_OUT},${R_OUT} 0 0 1 ${pt(a1, R_OUT)} L${pt(a1, R_IN)} A${R_IN},${R_IN} 0 0 0 ${pt(a0, R_IN)} Z`;
}

/** Bán kính ngoài = 50vw → nửa bánh xe lộ ra chiếm ~50% chiều rộng màn hình (tâm ở mép trái) */
const WHEEL_R = "50vw";

export default function ServicesWheel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const wheel = wheelRef.current;
      if (!section || !wheel) return;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;
      const rect = section.getBoundingClientRect();
      const travel = section.offsetHeight - (window.innerHeight - header);
      const p = Math.min(1, Math.max(0, (header - rect.top) / Math.max(travel, 1)));
      const pos = p * (N - 1);
      wheel.style.setProperty("--rot", `${-pos * STEP}deg`);
      setActive(Math.round(pos));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const counter = (n: number) => String(n).padStart(2, "0");

  return (
    // Chiều cao = 1 màn hình + quãng cuộn cho 4 lần chuyển (≈ 55svh mỗi dịch vụ)
    <div ref={sectionRef} className="relative h-[calc(100svh+4*55svh)]">
      <div className="sticky top-(--header-h) h-[calc(100svh-var(--header-h))] overflow-hidden">
        <svg aria-hidden width="0" height="0" className="absolute">
          <defs>
            {Array.from({ length: WEDGES }, (_, i) => (
              <clipPath key={i} id={`svc-wedge-${i}`} clipPathUnits="objectBoundingBox">
                <path d={sectorPath(i * STEP)} />
              </clipPath>
            ))}
          </defs>
        </svg>

        {/* ===== Trái: nửa bánh xe — tâm ở mép trái màn hình ===== */}
        <div
          ref={wheelRef}
          aria-hidden
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rotate-(--rot) will-change-transform"
          style={
            {
              "--rot": "0deg",
              width: `calc(${WHEEL_R} * 2)`,
              height: `calc(${WHEEL_R} * 2)`,
            } as CSSProperties
          }
        >
          {Array.from({ length: WEDGES }, (_, i) => {
            const s = services[i % N];
            const angle = i * STEP;
            const [cx, cy] = pt(angle, R_MID).split(",").map(Number);
            return (
              <div key={i} className="absolute inset-0 bg-sand" style={{ clipPath: `url(#svc-wedge-${i})` }}>
                {/* Khung ảnh đặt giữa ô quạt, xoay ngược để ảnh luôn đứng thẳng */}
                <div
                  className="absolute size-[50%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${cx * 100}%`,
                    top: `${cy * 100}%`,
                    rotate: "calc(var(--rot) * -1)",
                  }}
                >
                  <Image src={s.image} alt="" fill sizes="50vw" className="object-cover" style={{ objectPosition: s.position }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Số thứ tự trong nửa vòng tròn giữa */}
        <p
          aria-hidden
          className="absolute top-1/2 left-0 -translate-y-1/2 pl-[max(1.5rem,2vw)] font-serif text-moss italic tabular-nums"
        >
          <span className="block text-[3.2rem] leading-none xl:text-[3.8rem]">{counter(active + 1)}</span>
          <span className="mt-1 block text-[15px] text-muted">/ {counter(N)}</span>
        </p>

        {/* ===== Phải: tiêu đề section + dịch vụ đang xem ===== */}
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))]"
          style={{ left: `calc(${WHEEL_R} + 5vw)` }}
        >
          <div className="w-full max-w-[520px]">
            <p className="text-[11.5px] font-medium tracking-[0.26em] text-moss uppercase">{nb("Dịch vụ trọn gói")}</p>
            <h2
              id="services-title"
              className="mt-4 font-serif text-[2.6rem] leading-[1.08] font-medium text-ink xl:text-[3.25rem]"
            >
              {nb("Trọn Gói Cưới Tại Một Nơi")}
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              {nb(
                "Từ buổi chụp ảnh đầu tiên đến thước phim ngày cưới, ekip Thiên Vũ đồng hành cùng hai bạn trọn vẹn hành trình.",
              )}
            </p>

            <div className="mt-10 border-t border-ink/15 pt-8">
              <div className="relative min-h-[150px]">
                {services.map((s, i) => (
                  <div
                    key={s.id}
                    className={`absolute inset-x-0 top-0 transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none ${
                      i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                    }`}
                  >
                    <h3 className="font-serif text-[1.9rem] leading-tight font-medium text-ink xl:text-[2.2rem]">
                      {nb(s.title)}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{nb(s.text)}</p>
                  </div>
                ))}
              </div>

              {/* Thanh tiến độ */}
              <ol className="mt-4 flex gap-2" aria-hidden>
                {services.map((s, i) => (
                  <li
                    key={s.id}
                    className={`h-[2px] transition-[width,background-color] duration-500 ${
                      i === active ? "w-8 bg-moss" : "w-4 bg-ink/20"
                    }`}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
