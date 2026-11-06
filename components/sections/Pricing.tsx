import Image from "next/image";
import type { CSSProperties } from "react";
import TiltedCard from "@/components/reactbits/TiltedCard";
import BookingTrigger from "@/components/ui/BookingTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import { btnOutline, btnPrimary, container, headingGap } from "@/components/ui/styles";
import { packages } from "@/data/content";
import { img } from "@/data/images";
import { formatVnd, nb } from "@/lib/typography";

/** Ảnh mặt trước của từng thẻ (lấy từ public/images/library) */
const coverImages = [img.priceBack1, img.priceBack2, img.priceBack3];

/**
 * Chiều cao thẻ theo nội dung từng gói (đo thực tế): 266px + 31px mỗi hạng mục, +34px cho nhãn gói nổi bật.
 * Cộng thêm khi cột hẹp làm chữ xuống dòng: < 640px +24px, 1024–1279px +70px.
 */
const cardBase = (items: number, featured: boolean) => 266 + 31 * items + (featured ? 34 : 0);
const CARD_H = "var(--card-h)";
const cardHeightClass =
  "[--card-h:calc(var(--card-base)+24px)] sm:[--card-h:var(--card-base)] lg:[--card-h:calc(var(--card-base)+70px)] xl:[--card-h:var(--card-base)]";

/**
 * FR-02 — Bảng giá: 3 thẻ dùng TiltedCard (React Bits) — nghiêng theo chuột, nhấn để lật.
 * Mặt trước (mặc định): ảnh nền + tên gói + giá đè lên ảnh.
 * Mặt sau (sau khi nhấn): chi tiết đầy đủ của gói + nút đặt lịch.
 * Gói giữa nổi bằng viền rêu + nhô 12px. DEMO: giá tham khảo (Q8).
 */
export default function Pricing() {
  return (
    <section id="bang-gia" aria-labelledby="pricing-title" className="bg-cream py-16 sm:py-20 lg:py-[110px]">
      <div className={container}>
        <SectionHeading
          id="pricing-title"
          title="Bảng Giá Trọn Gói Minh Bạch"
          description="Giá tham khảo giúp hai bạn dễ dàng lên ngân sách – không phát sinh chi phí ẩn."
        />
        <div className={`${headingGap} mx-auto grid max-w-[420px] items-start gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-8 lg:pt-3`}>
          {packages.map((p, i) => {
            const featured = !!p.featured;
            return (
              <div
                key={p.id}
                className={`${cardHeightClass} ${featured ? "lg:-translate-y-3" : ""}`}
                style={{ "--card-base": `${cardBase(p.items.length, featured)}px` } as CSSProperties}
              >
                <TiltedCard
                  captionText={`${p.name}, ${formatVnd(p.price)} – nhấn để xem chi tiết`}
                  showTooltip={false}
                  containerWidth="100%"
                  containerHeight={CARD_H}
                  imageWidth="100%"
                  imageHeight={CARD_H}
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  glare={0.5}
                  shadow={0.5}
                  radius={2}
                  introDelay={i * 120}
                  style={{ "--tc-shadow-color": "rgba(43, 42, 39, 0.35)" } as CSSProperties}
                  backContent={
                    /* Mặt sau: chi tiết gói */
                    <div
                      className={`absolute inset-0 flex flex-col bg-ivory px-7 py-7 ${featured ? "border-2 border-moss" : "border border-ink/10"
                        }`}
                    >
                      {featured && (
                        <p className="mb-3 text-[12px] font-medium tracking-[0.18em] text-moss uppercase">Được chọn nhiều nhất</p>
                      )}
                      <h3 className="font-serif text-[1.6rem] leading-tight font-medium text-ink">{nb(p.name)}</h3>
                      <p className="mt-4 border-b border-ink/10 pb-5">
                        <span className="font-serif text-[2.6rem] leading-none font-medium text-ink tabular-nums">
                          {formatVnd(p.price)}
                        </span>
                        <span className="mt-2 block text-[12.5px] text-muted">Giá tham khảo</span>
                      </p>
                      <ul className="mt-5 flex-1 space-y-2.5">
                        {p.items.map((item) => (
                          <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink/85">
                            <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-moss" />
                            <span>{nb(item)}</span>
                          </li>
                        ))}
                      </ul>
                      <BookingTrigger
                        prefill={{ packageId: p.id }}
                        className={`${featured ? btnPrimary : btnOutline} mt-6 w-full`}
                        ariaLabel={`Đặt lịch ${p.name}`}
                      >
                        Đặt lịch gói này
                      </BookingTrigger>
                    </div>
                  }
                >
                  {/* Mặt trước: ảnh nền + tên gói + giá */}
                  <div className="absolute inset-0">
                    <Image
                      src={coverImages[i % coverImages.length]}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    {/* Lớp tối dần ở đáy để chữ ngà đủ tương phản */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1f18]/85 via-[#1b1f18]/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                      {featured && (
                        <p className="mb-2 text-[11.5px] font-medium tracking-[0.18em] uppercase opacity-90">Được chọn nhiều nhất</p>
                      )}
                      <h3 className="font-serif text-[2rem] leading-tight font-medium">{nb(p.name)}</h3>
                      <p className="mt-3 font-serif text-[2.6rem] leading-none font-medium tabular-nums">{formatVnd(p.price)}</p>
                      <p className="mt-2 text-[12.5px] opacity-80">Giá tham khảo · Nhấn để xem chi tiết</p>
                    </div>
                  </div>
                </TiltedCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
