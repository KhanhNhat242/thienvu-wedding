import Image from "next/image";
import { container, delay } from "@/components/ui/styles";
import { usps } from "@/data/content";
import { img } from "@/data/images";
import { nb } from "@/lib/typography";

/**
 * FR-10 — Giới thiệu & 4 điểm khác biệt (U1–U4). Nền kem.
 * Bố cục biên tập: ảnh dọc sạch + danh sách điểm khác biệt phân cách bằng đường kẻ mảnh (không thẻ icon).
 */
export default function About() {
  return (
    <section id="gioi-thieu" aria-labelledby="about-title" className="bg-cream py-16 sm:py-20 lg:py-[110px]">
      <div className={`${container} grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
        <figure data-reveal="up" className="mx-auto w-full max-w-[460px] lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-sand">
            <Image
              src={img.aboutArch}
              alt="Cô dâu chú rể bên hồ nước dưới chân núi đá Ninh Bình"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover object-[50%_60%]"
            />
          </div>
          <figcaption className="mt-3 text-[13px] text-muted">Ngoại cảnh Ninh Bình</figcaption>
        </figure>

        <div className="flex flex-col justify-center">
          <h2
            id="about-title"
            data-reveal="up"
            className="font-serif text-[2.125rem] leading-[1.1] font-medium text-ink sm:text-[2.6rem] lg:text-[3.25rem]"
          >
            {nb("Vì Sao Các Cặp Đôi Chọn Thiên Vũ?")}
          </h2>
          <p
            data-reveal="up"
            style={delay(80)}
            className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted sm:text-base"
          >
            {nb("Mang chuẩn mực studio Hàn Quốc về gần bạn với quy trình chu đáo và chi phí minh bạch.")}
          </p>

          <dl className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:mt-12">
            {usps.map((u, i) => (
              <div
                key={u.id}
                data-reveal="up"
                style={delay(80 * i)}
                className="border-t border-ink/15 py-6 sm:py-7"
              >
                <dt className="font-serif text-[1.45rem] leading-snug font-medium text-ink">{nb(u.title)}</dt>
                <dd className="mt-2 text-[14.5px] leading-relaxed text-muted">{nb(u.text)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
