// Lớp tiện ích dùng chung — Minimal & Direct: bo góc 0–4px, không bóng đổ (docs/REQUIREMENTS.md mục 8)

/** Khung nội dung: lề 20px mobile, tối đa 1240px */
export const container = "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10";

/** Khoảng cách Tiêu đề → Nội dung: 32px mobile · 40px tablet · 56px desktop */
export const headingGap = "mt-8 sm:mt-10 lg:mt-14";

/** Bo góc chuẩn của toàn trang */
export const radius = "rounded-[2px]";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-[2px] whitespace-nowrap text-[14px] font-medium tracking-wide transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2";

export const btnPrimary = `${btnBase} h-12 px-7 bg-moss text-ivory hover:bg-moss-dark`;

export const btnOutline = `${btnBase} h-12 px-7 border border-ink/25 text-ink bg-transparent hover:border-moss hover:text-moss`;

export const btnLight = `${btnBase} h-12 px-7 bg-ivory text-moss-dark hover:bg-cream`;

/** Liên kết dạng chữ có gạch chân mảnh */
export const linkArrow =
  "inline-flex items-center gap-2 border-b border-moss/40 pb-0.5 text-[14px] font-medium text-moss transition-colors hover:border-moss";

/** style cho độ trễ hiệu ứng reveal / hero-in */
export const delay = (ms: number, varName: "--reveal-delay" | "--d" = "--reveal-delay") =>
  ({ [varName]: `${ms}ms` }) as import("react").CSSProperties;
