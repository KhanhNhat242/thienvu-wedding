import Image from "next/image";
import WarpText from "@/components/reactbits/WarpText";
import { IconFacebook, IconMessenger, IconZalo } from "@/components/ui/Icons";
import { delay } from "@/components/ui/styles";
import { img } from "@/data/images";
import { BOOKING_ANCHOR, siteConfig } from "@/lib/site-config";

/**
 * Khung ảnh lượn sóng (clipPathUnits = objectBoundingBox → co giãn theo khung).
 * Ngoại lệ có chủ đích của Hero so với quy tắc bo góc 0–4px (yêu cầu từ ảnh mẫu bố cục).
 * - d: desktop, mép trái & phải cong chữ S; đỉnh ảnh lùi vào (0.36 → 0.66, tiếp tuyến dọc ở mép trên) để logo và menu header
 *   (header trong suốt, nằm đè lên Hero) không chồng lên ảnh  ·  m: mobile, mép dưới lượn sóng
 * - *Band: dải nền lệch ra ngoài ảnh, tạo lớp sóng thứ hai (không bóng đổ)
 */
const WAVES = {
  d: "M0.36,0 L0.66,0 C0.66,0.14 0.8,0.32 0.85,0.5 C0.91,0.67 0.99,0.82 0.96,1 L0.2,1 C0.09,0.84 0.01,0.66 0.04,0.48 C0.07,0.28 0.36,0.14 0.36,0 Z",
  dBand: "M0.31,0 L0.71,0 C0.71,0.14 0.85,0.32 0.9,0.5 C0.96,0.67 1,0.82 1,1 L0.15,1 C0.04,0.84 -0.02,0.66 0,0.48 C0.03,0.28 0.31,0.14 0.31,0 Z",
  m: "M0,0 L1,0 L1,0.86 C0.8,0.98 0.58,0.84 0.36,0.92 C0.2,0.98 0.08,0.96 0,0.9 Z",
  mBand: "M0,0 L1,0 L1,0.93 C0.8,1.02 0.58,0.9 0.36,0.97 C0.2,1.02 0.08,1 0,0.96 Z",
};

const socials = [
  { href: siteConfig.facebookHref, label: "Fanpage Facebook", icon: <IconFacebook className="size-4" /> },
  { href: siteConfig.zaloHref, label: "Nhắn tin Zalo", icon: <IconZalo className="size-6" /> },
  { href: siteConfig.messengerHref, label: "Nhắn tin Messenger", icon: <IconMessenger className="size-[17px]" /> },
];

/**
 * FR-09 — Hero theo ảnh mẫu bố cục: ảnh lớn bên trái trong khung sóng, khối chữ bên phải (tiêu đề WarpText),
 * icon mạng xã hội góc dưới trái. Desktop: kéo lên nằm dưới header trong suốt (cao đúng 100svh).
 * Ảnh sạch (không phủ/lọc màu).
 */
export default function Hero() {
  return (
    <section
      id="trang-chu"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-var(--header-h))] flex-col overflow-hidden bg-ivory lg:-mt-(--header-h) lg:block lg:min-h-svh"
    >
      <svg aria-hidden width="0" height="0" className="absolute">
        <defs>
          {Object.entries(WAVES).map(([id, d]) => (
            <clipPath key={id} id={`hero-wave-${id}`} clipPathUnits="objectBoundingBox">
              <path d={d} />
            </clipPath>
          ))}
        </defs>
      </svg>

      {/* Khung ảnh: mobile ở trên, desktop chiếm ~62% bên trái, cao hết Hero */}
      <div className="relative h-[42svh] min-h-[250px] w-full sm:h-[48svh] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[62%]">
        <div
          aria-hidden
          className="absolute inset-0 bg-sand [clip-path:url(#hero-wave-mBand)] lg:[clip-path:url(#hero-wave-dBand)]"
        />
        <div className="hero-in absolute inset-0 [clip-path:url(#hero-wave-m)] lg:[clip-path:url(#hero-wave-d)]">
          <Image
            src={img.heroMain}
            alt="Cô dâu chú rể trong trang phục trắng dưới nắng ấm"
            fill
            preload
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-[45%_35%]"
          />
        </div>
      </div>

      {/* Khối chữ (desktop: cột phải) — tiêu đề dùng WarpText (React Bits, WebGL) */}
      <div className="relative flex flex-1 items-center justify-center px-5 pt-6 pb-16 sm:px-8 sm:pt-10 lg:ml-auto lg:min-h-svh lg:w-[38%] lg:pt-[calc(var(--header-h)+2rem)] lg:pb-16 lg:pr-[max(1rem,calc((100vw-1240px)/2+0.5rem))] lg:pl-2">
        <div className="w-full max-w-[560px] text-center">
          {/* Tiêu đề thật cho SEO & trình đọc màn hình; bản WarpText chỉ để nhìn */}
          <h1 id="hero-title" className="sr-only">
            Lưu Giữ Thanh Xuân Bằng Những Khung Hình Tinh{" "}Tế
          </h1>
          <div aria-hidden className="hero-in text-moss" style={delay(250, "--d")}>
            <WarpText
              text={"Lưu Giữ\nThanh Xuân\nBằng Những Khung\nHình Tinh Tế"}
              color="currentColor"
              fontFamily="var(--font-cormorant), 'Times New Roman', serif"
              fontSize="clamp(2.6rem, 6vw, 5.5rem)"
              fontWeight={600}
              letterSpacing="-0.02em"
              lineHeight={1.1}
              warpStrength={0.08}
              warpScale={1.7}
              speed={0.55}
              lens="bulge"
              pointerInfluence={0.42}
              pointerStrength={0.38}
              refraction={0.018}
              chromatic={0.35}
              idleDrift={0.2}
              ripple
              clickRipple
              intro
              className="h-[260px] sm:h-[320px] lg:h-[clamp(340px,50vh,520px)]"
            />
          </div>
          <a
            href={BOOKING_ANCHOR}
            className="hero-in mt-4 inline-flex h-12 items-center justify-center rounded-full border border-moss px-8 text-[14px] font-medium tracking-wide text-moss transition-colors hover:bg-moss hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 lg:mt-6"
            style={delay(650, "--d")}
          >
            Đặt lịch tư vấn
          </a>
        </div>
      </div>

      {/* Mạng xã hội — góc dưới trái, nằm trên dải nền ngoài khung ảnh (desktop) */}
      <ul
        aria-label="Mạng xã hội"
        className="hero-in absolute bottom-6 left-5 z-10 hidden items-center gap-2 lg:flex xl:left-8"
        style={delay(800, "--d")}
      >
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-full border border-moss/50 text-moss transition-colors hover:border-moss hover:bg-moss hover:text-ivory"
            >
              {s.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
