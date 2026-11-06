import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { IconCalendar, IconDress, IconPin } from "@/components/ui/Icons";
import { container, delay } from "@/components/ui/styles";
import { usps } from "@/data/content";
import { nb } from "@/lib/typography";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  U1: IconPin,
  U2: IconDress,
  U3: IconCalendar,
};

/**
 * FR-10 — Giới thiệu & điểm khác biệt (U1–U3). Nền kem.
 * Bố cục theo ảnh mẫu: tiêu đề serif nghiêng cỡ lớn ở giữa, bên dưới 3 cột căn giữa
 * (icon nét mảnh + tiêu đề + đoạn ngắn), không khung thẻ.
 * Hover (chỉ thiết bị có chuột): ảnh hiện làm nền cột, chữ chuyển màu ngà đè lên ảnh.
 * Ngoại lệ có chủ đích của quy tắc "không phủ ảnh": lớp tối mờ dưới chữ để đủ tương phản (AA).
 */
export default function About() {
  return (
    <section id="gioi-thieu" aria-labelledby="about-title" className="bg-cream py-16 sm:py-20 lg:py-[110px]">
      <div className={container}>
        <div className="mx-auto max-w-[720px] text-center">
          <h2
            id="about-title"
            data-reveal="up"
            className="font-serif text-[2.6rem] leading-[1.05] font-normal text-moss italic sm:text-[3.4rem] lg:text-[4.25rem]"
          >
            {nb("Vì Sao Các Cặp Đôi Chọn Thiên Vũ?")}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3 md:gap-4 lg:mt-16 lg:gap-6">
          {usps.map((u, i) => {
            const Icon = icons[u.id];
            return (
              <article
                key={u.id}
                data-reveal="up"
                style={delay(100 * i)}
                className="group relative isolate flex flex-col items-center justify-center overflow-hidden rounded-[2px] px-7 py-10 text-center md:min-h-[360px] lg:px-10"
              >
                {/* Ảnh nền + lớp tối — chỉ hiện khi hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                >
                  <Image
                    src={u.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-[#1f2a1c]/60" />
                </div>

                {Icon && (
                  <Icon
                    className="mx-auto size-12 text-moss transition-colors duration-500 group-hover:text-ivory"
                    strokeWidth={1}
                  />
                )}
                <h3 className="mt-5 max-w-[300px] font-serif text-[1.55rem] leading-snug font-semibold text-ink transition-colors duration-500 group-hover:text-ivory">
                  {nb(u.title)}
                </h3>
                <p className="mt-3 max-w-[300px] text-[14.5px] leading-relaxed text-muted transition-colors duration-500 group-hover:text-ivory/90">
                  {nb(u.text)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
