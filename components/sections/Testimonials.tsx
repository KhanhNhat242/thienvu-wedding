import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { container, delay, headingGap } from "@/components/ui/styles";
import { testimonials } from "@/data/content";
import { nb } from "@/lib/typography";

/**
 * FR-07 — Cảm nhận khách hàng (Social Proof): ảnh cặp đôi + trích dẫn, viền trái màu rêu.
 * Không sao vàng, không bóng. DEMO: nội dung minh hoạ (Q9).
 */
export default function Testimonials() {
  return (
    <section id="cam-nhan" aria-labelledby="testimonials-title" className="bg-ivory py-16 sm:py-20 lg:py-24">
      <div className={container}>
        <SectionHeading
          id="testimonials-title"
          title="Lời Nhắn Từ Các Cặp Đôi"
          description="Niềm vui của hai bạn là động lực lớn nhất của ekip Thiên Vũ."
        />

        <ul
          className={`${headingGap} no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0`}
          aria-label="Danh sách cảm nhận khách hàng"
        >
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              data-reveal="up"
              style={delay(i * 100)}
              className="flex w-[85%] shrink-0 snap-center flex-col md:w-auto"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-sand">
                <Image
                  src={t.avatar}
                  alt={`Ảnh cưới của ${t.name}`}
                  fill
                  sizes="(min-width: 768px) 360px, 85vw"
                  className="object-cover"
                  style={{ objectPosition: t.position }}
                />
              </div>
              <figure className="mt-6 flex flex-1 flex-col border-l-2 border-moss pl-5">
                <blockquote className="flex-1 font-serif text-[1.25rem] leading-relaxed text-ink italic">
                  {nb(t.quote)}
                </blockquote>
                <figcaption className="mt-5">
                  <span className="block text-[14.5px] font-medium text-ink">{t.name}</span>
                  <span className="text-[13px] text-muted">{t.place}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
