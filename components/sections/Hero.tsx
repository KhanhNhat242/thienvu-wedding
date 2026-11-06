import Image from "next/image";
import { btnPrimary, container, delay, linkArrow } from "@/components/ui/styles";
import { img } from "@/data/images";
import { BOOKING_ANCHOR } from "@/lib/site-config";
import { nb } from "@/lib/typography";

/**
 * FR-09 — Hero: Hero-Centric (cao 1 màn hình) + Exaggerated Minimalism (chữ serif cỡ lớn).
 * Ảnh sạch: không lớp phủ, không lọc màu, không bo góc. Mobile: ảnh trên, chữ dưới.
 */
export default function Hero() {
  return (
    <section
      id="trang-chu"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-var(--header-h))] flex-col bg-ivory lg:block"
    >
      {/* Ảnh: mobile ở trên, desktop tràn nửa phải tới mép màn hình */}
      <div className="relative h-[40svh] min-h-[240px] w-full sm:h-[46svh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[48%]">
        <Image
          src={img.heroMain}
          alt="Cô dâu chú rể trong trang phục trắng dưới nắng ấm"
          fill
          preload
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover object-[45%_35%]"
        />
      </div>

      <div className={`${container} flex flex-1 lg:min-h-[calc(100svh-var(--header-h))]`}>
        <div className="flex flex-col justify-center pt-7 pb-16 sm:py-12 lg:w-[52%] lg:py-16 lg:pr-12">
          <p
            className="hero-in flex items-center gap-3 text-[10.5px] font-medium tracking-[0.22em] text-moss uppercase sm:text-xs sm:tracking-[0.28em]"
            style={delay(100, "--d")}
          >
            <span aria-hidden className="h-px w-8 bg-moss/50" />
            {nb("Studio Ảnh Cưới Hàn Quốc – Ý Yên")}
          </p>

          <h1 id="hero-title" className="mt-5 font-serif font-medium text-ink lg:mt-8">
            <span
              className="hero-in block text-[1.6rem] leading-tight sm:text-[2.2rem] lg:text-[clamp(2rem,1rem+1.6vw,2.9rem)]"
              style={delay(200, "--d")}
            >
              Lưu Giữ
            </span>
            <span
              className="hero-in -ml-1 block text-[clamp(3.6rem,16vw,6.5rem)] leading-[0.92] font-normal whitespace-nowrap text-moss italic lg:text-[clamp(5rem,8.6vw,9.5rem)]"
              style={delay(300, "--d")}
            >
              Thanh Xuân
            </span>
            <span
              className="hero-in mt-2 block text-[1.6rem] leading-tight sm:text-[2.2rem] lg:mt-3 lg:text-[clamp(2rem,1rem+1.6vw,2.9rem)]"
              style={delay(400, "--d")}
            >
              {nb("Bằng Những Khung Hình Tinh Tế")}
            </span>
          </h1>

          <p
            className="hero-in mt-4 max-w-[480px] text-[15px] leading-relaxed text-muted sm:text-[17px] lg:mt-8"
            style={delay(500, "--d")}
          >
            {nb(
              "Trọn gói chụp ảnh, váy cưới thiết kế, trang điểm và quay video bắt trend ngay tại Ý Yên – chẳng cần đi xa.",
            )}
          </p>

          <div
            className="hero-in mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 lg:mt-10"
            style={delay(600, "--d")}
          >
            <a href={BOOKING_ANCHOR} className={btnPrimary}>
              Đặt lịch tư vấn
            </a>
            <a href="#bang-gia" className={linkArrow}>
              Xem bảng giá
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
