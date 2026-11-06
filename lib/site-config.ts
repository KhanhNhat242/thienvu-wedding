// Thông tin thương hiệu & liên hệ — NGUỒN DUY NHẤT (R-STRUCTURE). Không hard-code trong component.

const PHONE = "0974569193";

export const siteConfig = {
  // DEMO: tên hiển thị tạm – chờ sale xác nhận (Q1)
  brandName: "Thiên Vũ Wedding",
  brandFull: "Thiên Vũ Wedding Studio",
  shortName: "Thiên Vũ",
  tagline: "Studio ảnh cưới phong cách Hàn Quốc tại Ý Yên",

  phone: PHONE,
  phoneDisplay: "0974 569 193",
  phoneHref: `tel:${PHONE}`,
  zaloHref: `https://zalo.me/${PHONE}`,
  // Suy ra từ username fanpage — cần mở thử xác nhận trước khi giao
  messengerHref: "https://m.me/THIENVUSTUDIO",
  facebookHref: "https://www.facebook.com/THIENVUSTUDIO",

  // DEMO: địa chỉ chi tiết chưa có (Q3)
  address: "Ý Yên, Ninh Bình",
  // DEMO: giờ mở cửa cụ thể chưa có (Q4)
  openingHours: "Mở cửa tất cả các ngày trong tuần",

  mapsDirectionsHref: "https://maps.app.goo.gl/WT4SccJhe4ePhc8A6",
  // Toạ độ địa điểm "THIENVUWEDDING" lấy từ link Google Maps ở phiếu
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=20.3175377,106.0224283&z=15&hl=vi&output=embed",
} as const;

/** Domain website — đặt NEXT_PUBLIC_SITE_URL khi deploy (Vercel tự có VERCEL_PROJECT_PRODUCTION_URL) */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const navItems = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#bang-gia", label: "Bảng giá" },
  { href: "#album", label: "Album" },
  { href: "#trang-phuc", label: "Trang phục" },
  { href: "#lien-he", label: "Liên hệ" },
] as const;

export const BOOKING_ANCHOR = "#dat-lich";
