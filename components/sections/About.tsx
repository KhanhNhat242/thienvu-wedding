import Image from "next/image";
import { container, delay } from "@/components/ui/styles";
import { usps } from "@/data/content";
import { nb } from "@/lib/typography";

/**
 * FR-10 — Giới thiệu & điểm khác biệt (U1–U3). Nền kem.
 * Bố cục theo ảnh mẫu: tiêu đề serif nghiêng cỡ lớn ở giữa, bên dưới 3 cột căn giữa
 * (icon nét mảnh + tiêu đề + đoạn ngắn), không khung thẻ.
 * Mỗi cột luôn có ảnh minh hoạ làm nền, tiêu đề màu ngà đè lên. Hover/focus: ảnh zoom nhẹ,
 * đoạn mô tả trượt từ dưới lên. Thiết bị cảm ứng (không có hover): mô tả luôn hiện.
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
            return (
              <article
                key={u.id}
                data-reveal="up"
                style={delay(100 * i)}
                tabIndex={0}
                className="group relative isolate flex flex-col items-center justify-center overflow-hidden rounded-[2px] px-7 py-10 text-center min-h-[300px] md:min-h-[360px] lg:px-10"
              >
                {/* Ảnh nền + lớp tối — luôn hiện; hover zoom nhẹ */}
                <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-sand">
                  <Image
                    src={u.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06] motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-[#1f2a1c]/60" />
                </div>

                <h3 className="max-w-[300px] font-serif text-[1.55rem] leading-snug font-semibold text-ivory">
                  {nb(u.title)}
                </h3>
                {/* Mô tả: thu gọn mặc định (thiết bị có chuột), hover/focus thì mở ra + trượt từ dưới lên */}
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-[300px] text-[14.5px] leading-relaxed text-ivory/90 transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:translate-y-0 [@media(hover:hover)]:group-focus-visible:opacity-100">
                      {nb(u.text)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
