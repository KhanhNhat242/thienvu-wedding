import Image from "next/image";
import ServicesWheel from "@/components/sections/ServicesWheel";
import { container, delay } from "@/components/ui/styles";
import { services } from "@/data/content";
import { nb } from "@/lib/typography";

/**
 * FR-11 — 5 dịch vụ S1–S5. Nền ngà.
 * - Desktop (≥ 1024px): trái là nửa bánh xe ảnh xoay theo cuộn, phải là tiêu đề + dịch vụ đang xem (ServicesWheel).
 * - Mobile/tablet: danh sách ảnh + chú thích (bánh xe ghim màn hình không vừa màn hình nhỏ).
 */
export default function Services() {
  return (
    <section id="dich-vu" aria-label="Dịch vụ" className="bg-ivory">
      <div className="hidden lg:block">
        <ServicesWheel />
      </div>

      <div className={`${container} py-16 sm:py-20 lg:hidden`}>
        <p className="text-center text-[11.5px] font-medium tracking-[0.26em] text-moss uppercase">{nb("Dịch vụ trọn gói")}</p>
        <h2 className="mt-4 text-center font-serif text-[2.125rem] leading-[1.1] font-medium text-ink sm:text-[2.6rem]">
          {nb("Trọn Gói Cưới Tại Một Nơi")}
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-center text-[15px] leading-relaxed text-muted">
          {nb("Từ buổi chụp ảnh đầu tiên đến thước phim ngày cưới, ekip Thiên Vũ đồng hành cùng hai bạn trọn vẹn hành trình.")}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.id}
              data-reveal="up"
              style={delay((i % 2) * 90)}
              className={i === services.length - 1 ? "sm:col-span-2" : ""}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-sand">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  style={{ objectPosition: s.position }}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-[1.6rem] leading-tight font-medium text-ink">{nb(s.title)}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{nb(s.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
