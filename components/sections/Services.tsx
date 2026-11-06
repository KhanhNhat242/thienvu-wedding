import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { container, delay, headingGap } from "@/components/ui/styles";
import { services } from "@/data/content";
import { nb } from "@/lib/typography";

/**
 * FR-11 — 5 dịch vụ S1–S5. Nền ngà. Lưới bất đối xứng: 2 ô lớn + 3 ô vừa.
 * Ảnh sạch, chữ đặt dưới ảnh như chú thích tạp chí (không phủ tối lên ảnh).
 */
export default function Services() {
  return (
    <section id="dich-vu" aria-labelledby="services-title" className="bg-ivory py-16 sm:py-20 lg:py-[110px]">
      <div className={container}>
        <SectionHeading
          id="services-title"
          title="Trọn Gói Cưới Tại Một Nơi"
          description="Từ buổi chụp ảnh đầu tiên đến thước phim ngày cưới, ekip Thiên Vũ đồng hành cùng hai bạn trọn vẹn hành trình."
        />

        <div className={`${headingGap} grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-14`}>
          {services.map((s, i) => {
            const large = s.size === "large";
            const last = i === services.length - 1;
            return (
              <article
                key={s.id}
                data-reveal="up"
                style={delay((i % 3) * 90)}
                className={`group ${large ? "lg:col-span-3" : "lg:col-span-2"} ${last ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[2px] bg-sand ${
                    large ? "aspect-[4/3] lg:aspect-[3/2]" : "aspect-[4/3] lg:aspect-[4/5]"
                  } ${last ? "sm:aspect-[16/9] lg:aspect-[4/5]" : ""}`}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    style={{ objectPosition: s.position }}
                    sizes={large ? "(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="mt-5 font-serif text-[1.6rem] leading-tight font-medium text-ink lg:text-[1.75rem]">
                  {nb(s.title)}
                </h3>
                <p className="mt-2 max-w-[460px] text-[14.5px] leading-relaxed text-muted">{nb(s.text)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
