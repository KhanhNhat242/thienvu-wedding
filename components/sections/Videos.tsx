import Image from "next/image";
import { IconPlay } from "@/components/ui/Icons";
import { btnLight, container, delay } from "@/components/ui/styles";
import { videos } from "@/data/content";
import { siteConfig } from "@/lib/site-config";
import { nb } from "@/lib/typography";

/** FR-12 — Video trend & quay phim (S5, U4). Nền xanh rêu trầm — khu nhấn duy nhất của trang. */
export default function Videos() {
  return (
    <section id="video" aria-labelledby="videos-title" className="bg-moss-dark py-16 text-ivory sm:py-20 lg:py-24">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16`}>
        <div>
          <h2
            id="videos-title"
            data-reveal="up"
            className="font-serif text-[2.125rem] leading-[1.1] font-medium sm:text-[2.6rem] lg:text-[3.25rem]"
          >
            Quay Video <em className="font-normal">“Đu Trend”</em> Cực Vui Cùng{" "}Ekip
          </h2>
          <p
            data-reveal="up"
            style={delay(80)}
            className="mt-5 max-w-[480px] text-[15px] leading-relaxed text-ivory/80 sm:text-base"
          >
            {nb(
              "Không chỉ lưu giữ thước phim lễ cưới trang trọng, Thiên Vũ còn cùng hai bạn thực hiện những clip biến hình, bắt trend đầy kỷ niệm.",
            )}
          </p>
          <a
            data-reveal="up"
            style={delay(160)}
            href={siteConfig.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnLight} mt-8`}
          >
            Xem thêm video trên Fanpage
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {videos.map((v, i) => (
            <a
              key={v.image}
              href={siteConfig.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Xem video: ${v.title} (mở Fanpage)`}
              data-reveal="up"
              style={delay(100 * i)}
              className="group block"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-[2px] bg-moss">
                <Image
                  src={v.image}
                  alt={v.alt}
                  fill
                  style={{ objectPosition: v.position }}
                  sizes="(min-width: 1024px) 220px, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-0 left-0 grid size-9 place-items-center bg-ivory text-moss-dark sm:size-11">
                  <IconPlay className="ml-0.5 size-4" />
                </span>
              </div>
              <p className="mt-3 text-[12px] leading-snug text-ivory/85 sm:text-[13.5px]">{nb(v.title)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
