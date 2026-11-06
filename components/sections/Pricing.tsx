import BookingTrigger from "@/components/ui/BookingTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import { btnOutline, btnPrimary, container, delay, headingGap } from "@/components/ui/styles";
import { packages } from "@/data/content";
import { formatVnd, nb } from "@/lib/typography";

/**
 * FR-02 — Bảng giá (Conversion-Optimized, tiết chế): 3 gói, gói giữa nổi bằng viền rêu + nhô 12px.
 * Không bóng đổ, không màu khẩn cấp. DEMO: giá tham khảo (Q8).
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

        <div className={`${headingGap} grid items-start gap-6 md:grid-cols-3 md:gap-5 lg:gap-8 lg:pt-3`}>
          {packages.map((p, i) => {
            const featured = !!p.featured;
            return (
              <article
                key={p.id}
                data-reveal="up"
                style={delay(i * 100)}
                className={`flex h-full flex-col rounded-[2px] bg-ivory px-7 py-9 lg:px-[28px] lg:py-[36px] ${
                  featured ? "border-2 border-moss md:-translate-y-3" : "border border-ink/10"
                }`}
              >
                {featured && (
                  <p className="mb-3 text-[12px] font-medium tracking-[0.18em] text-moss uppercase">Được chọn nhiều nhất</p>
                )}
                <h3 className="font-serif text-[1.6rem] leading-tight font-medium text-ink">{nb(p.name)}</h3>
                <p className="mt-5 border-b border-ink/10 pb-6">
                  <span className="font-serif text-[2.6rem] leading-none font-medium text-ink tabular-nums">
                    {formatVnd(p.price)}
                  </span>
                  <span className="mt-2 block text-[12.5px] text-muted">Giá tham khảo</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink/85">
                      <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-moss" />
                      <span>{nb(item)}</span>
                    </li>
                  ))}
                </ul>
                <BookingTrigger
                  prefill={{ packageId: p.id }}
                  className={`${featured ? btnPrimary : btnOutline} mt-8 w-full`}
                  ariaLabel={`Đặt lịch ${p.name}`}
                >
                  Đặt lịch gói này
                </BookingTrigger>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
