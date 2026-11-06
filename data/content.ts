import { img } from "./images";

// Nội dung trang dạng dữ liệu (R-STRUCTURE). Mục nào có "DEMO" là nội dung minh hoạ, chờ dữ liệu thật.

/** USP U1–U4 (docs/REQUIREMENTS.md mục 6) */
export const usps: { id: string; title: string; text: string }[] = [
  {
    id: "U1",
    title: "Chuẩn Hàn Ngay Tại Ý Yên",
    text: "Concept ánh sáng trong trẻo, hiện đại mà không cần vất vả di chuyển lên thành phố.",
  },
  {
    id: "U2",
    title: "Trọn Gói Tại Một Nơi",
    text: "Từ chụp ảnh, váy cưới, vest, áo dài đến trang điểm và quay phim ngày cưới.",
  },
  {
    id: "U4",
    title: "Bắt Nhịp Video Đu Trend",
    text: "Ekip trẻ trung, sẵn sàng quay dựng những clip ngắn vui nhộn cùng cô dâu chú rể.",
  },
  {
    id: "U3",
    title: "Linh Hoạt Cả Tuần",
    text: "Mở cửa tất cả các ngày trong tuần, hỗ trợ đặt lịch tư vấn online nhanh chóng.",
  },
];

/** Dịch vụ S1–S5 (docs/REQUIREMENTS.md mục 5) */
export const services: {
  id: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  position?: string;
  size: "large" | "medium";
}[] = [
  {
    id: "S1",
    title: "Chụp Ảnh Cưới",
    text: "Đa dạng concept từ studio Hàn Quốc, phim trường đến ngoại cảnh thiên nhiên.",
    image: img.s1,
    alt: "Cô dâu chú rể cười rạng rỡ trong studio",
    position: "50% 25%",
    size: "large",
  },
  {
    id: "S2",
    title: "Phóng Sự Ngày Cưới",
    text: "Bắt trọn từng khoảnh khắc cảm xúc tự nhiên trong lễ ăn hỏi và lễ cưới.",
    image: img.s2,
    alt: "Cô dâu chú rể nâng ly chúc mừng bên tháp ly và đèn chùm",
    position: "50% 55%",
    size: "large",
  },
  {
    id: "S3",
    title: "Cho Thuê Trang Phục",
    text: "Bộ sưu tập váy cưới, vest lịch lãm và áo dài cưới cập nhật mẫu mới liên tục.",
    image: img.s3,
    alt: "Ekip chỉnh tà váy cưới xòe rộng cho cô dâu",
    position: "55% 50%",
    size: "medium",
  },
  {
    id: "S4",
    title: "Trang Điểm Cô Dâu",
    text: "Lớp makeup tôn nét tự nhiên, trong veo chuẩn Hàn, giữ nền bền đẹp suốt ngày dài.",
    image: img.s4,
    alt: "Cận mặt cô dâu mỉm cười với lớp trang điểm trong trẻo",
    position: "50% 25%",
    size: "medium",
  },
  {
    id: "S5",
    title: "Quay Phim & Video Trend",
    text: "Phim cưới truyền thống kết hợp video ngắn bắt trend sôi động trên TikTok, Reels.",
    image: img.s5,
    alt: "Nắng xuyên qua tán lá trước cổng gỗ cổ kính",
    position: "50% 65%",
    size: "medium",
  },
];

/** FR-02 — DEMO: giá & hạng mục minh hoạ, chờ bảng giá thật (Q8) */
export type PricePackage = {
  id: string;
  name: string;
  price: number;
  featured?: boolean;
  items: string[];
};

export const packages: PricePackage[] = [
  {
    id: "studio-tiet-kiem",
    name: "Gói Studio Tiết Kiệm",
    price: 3_900_000,
    items: [
      "Chụp studio 02 concept Hàn Quốc",
      "01 Váy cưới + 01 Vest",
      "Makeup và làm tóc cô dâu",
      "01 Ảnh phóng 60x90 cao cấp",
      "01 Album 25x25 (20 trang)",
    ],
  },
  {
    id: "tron-goi-yeu-thich",
    name: "Gói Trọn Gói Yêu Thích",
    price: 5_900_000,
    featured: true,
    items: [
      "Studio + 01 địa điểm ngoại cảnh",
      "02 Váy cưới + 02 Vest",
      "Makeup tại studio và ngoại cảnh",
      "01 Ảnh phóng 60x90 + 02 ảnh bàn",
      "01 Album 30x30 (30 trang)",
      "01 Video ngắn bắt trend",
    ],
  },
  {
    id: "ngoai-canh-cao-cap",
    name: "Gói Ngoại Cảnh Cao Cấp",
    price: 8_900_000,
    items: [
      "Studio + 02 địa điểm ngoại cảnh",
      "03 Váy cưới + 02 Vest + Áo dài",
      "Makeup theo suốt buổi chụp",
      "01 Ảnh phóng 90x120 + 02 ảnh bàn",
      "01 Album cao cấp 30x40",
      "01 Video cưới 1–3 phút",
    ],
  },
];

export const NO_PACKAGE = { id: "can-tu-van", name: "Chưa chọn – cần tư vấn" } as const;

/** FR-03 — Album lọc theo loại. Ảnh thật của studio (public/images/library). */
export type AlbumCategory = "studio" | "ngoai-canh" | "phong-su";
export const albumFilters: { id: "all" | AlbumCategory; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "studio", label: "Studio" },
  { id: "ngoai-canh", label: "Ngoại cảnh" },
  { id: "phong-su", label: "Phóng sự" },
];

export type AlbumPhoto = {
  src: string;
  alt: string;
  category: AlbumCategory;
  label: string;
  position?: string;
};

export const albumPhotos: AlbumPhoto[] = [
  { src: img.studio1, alt: "Cô dâu chú rể vest kem bên cánh cửa xanh", category: "studio", label: "Concept Hàn Quốc", position: "50% 30%" },
  { src: img.outdoor1, alt: "Cô dâu khoác tay chú rể giữa vườn cây xanh", category: "ngoai-canh", label: "Ngoại cảnh sân vườn", position: "50% 40%" },
  { src: img.party1, alt: "Cặp đôi tựa vào nhau dưới đèn chùm pha lê", category: "phong-su", label: "Tiệc cưới", position: "50% 45%" },
  { src: img.outdoor6, alt: "Cặp đôi cầm bảng Save the Date, tà váy bay trong gió", category: "ngoai-canh", label: "Save the Date", position: "50% 50%" },
  { src: img.studio2, alt: "Cận cảnh cặp đôi mỉm cười trong studio", category: "studio", label: "Concept Hàn Quốc", position: "50% 40%" },
  { src: img.outdoor5, alt: "Cặp đôi bên hồ dưới chân núi đá Ninh Bình", category: "ngoai-canh", label: "Ngoại cảnh Ninh Bình", position: "50% 72%" },
  { src: img.party2, alt: "Cô dâu chú rể nâng ly bên tháp ly sâm panh", category: "phong-su", label: "Tiệc cưới", position: "50% 55%" },
  { src: img.outdoor3, alt: "Cô dâu tựa vai chú rể trên bậc thềm cổ kính", category: "ngoai-canh", label: "Ngoại cảnh cổ kính", position: "50% 70%" },
  { src: img.studio3, alt: "Cô dâu chú rể trên nền rèm nhung đỏ", category: "studio", label: "Concept Velvet", position: "50% 55%" },
  { src: img.outdoor8, alt: "Khăn voan bay trong gió giữa khu vườn", category: "ngoai-canh", label: "Ngoại cảnh sân vườn", position: "50% 45%" },
  { src: img.party4, alt: "Nụ hôn dưới đèn chùm trong tiệc cưới", category: "phong-su", label: "Khoảnh khắc tự nhiên", position: "50% 48%" },
  { src: img.outdoor2, alt: "Cô dâu với khăn voan dài thướt tha bên chú rể", category: "ngoai-canh", label: "Ngoại cảnh sân vườn", position: "50% 45%" },
  { src: img.studio4, alt: "Cô dâu váy xòe bồng bềnh bên chú rể trên nền đỏ", category: "studio", label: "Concept Velvet", position: "50% 60%" },
  { src: img.outdoor7, alt: "Chú rể nâng niu gương mặt cô dâu", category: "ngoai-canh", label: "Khoảnh khắc tự nhiên", position: "50% 30%" },
  { src: img.party3, alt: "Cặp đôi bên bàn tiệc nến và hoa", category: "phong-su", label: "Tiệc cưới", position: "50% 55%" },
  { src: img.outdoor4, alt: "Cô dâu chú rể trước cổng gỗ cổ kính", category: "ngoai-canh", label: "Ngoại cảnh cổ kính", position: "50% 62%" },
];

/** FR-04 — DEMO: tên/mã mẫu minh hoạ, chờ danh sách thật */
export type OutfitCategory = "vay-cuoi" | "vest" | "ao-dai";
export const outfitTabs: { id: OutfitCategory; label: string }[] = [
  { id: "vay-cuoi", label: "Váy cưới" },
  { id: "vest", label: "Vest" },
  { id: "ao-dai", label: "Áo dài cưới" },
];

export const outfits: {
  id: string;
  category: OutfitCategory;
  name: string;
  style: string;
  image: string;
  alt: string;
  position?: string;
}[] = [
  { id: "TV01", category: "vay-cuoi", name: "Váy Công Chúa Kim Sa", style: "Dáng xòe bồng, ren kim sa", image: img.dressMannequin1, alt: "Váy cưới công chúa xòe bồng trên ma-nơ-canh" },
  { id: "TV02", category: "vay-cuoi", name: "Váy Trễ Vai Ren Pha Lê", style: "Trễ vai, corset đính ren", image: img.dressMannequin2, alt: "Cận cảnh váy cưới trễ vai đính ren pha lê" },
  { id: "TV03", category: "vay-cuoi", name: "Váy Cúp Ngực Tùng Xòe", style: "Cúp ngực, tùng váy xòe lớn", image: img.dressRed, alt: "Cô dâu váy cúp ngực tùng xòe trên nền rèm đỏ", position: "60% 50%" },
  { id: "TV04", category: "vay-cuoi", name: "Váy Hoàng Gia Đuôi Dài", style: "Dáng xòe, đuôi váy dài", image: img.dressGate, alt: "Cô dâu váy đuôi dài trải trên bậc thềm cổ" },
  { id: "TV05", category: "vay-cuoi", name: "Váy Voan Dài Thướt Tha", style: "Cúp ngực, voan dài bay", image: img.dressVeil, alt: "Cô dâu với khăn voan dài thướt tha", position: "60% 50%" },
  { id: "TV06", category: "vay-cuoi", name: "Váy Đuôi Cá Hoa Nổi", style: "Dáng đuôi cá, hoa nổi", image: img.dressRuffle, alt: "Cô dâu váy đuôi cá đính hoa nổi bên hồ", position: "68% 50%" },
  { id: "TV07", category: "vay-cuoi", name: "Váy Satin Tối Giản", style: "Cúp ngực, satin trơn", image: img.dressSatin, alt: "Cô dâu váy satin tối giản", position: "72% 50%" },
  { id: "TV08", category: "vay-cuoi", name: "Váy Xòe Velvet", style: "Cúp ngực, chân váy bồng", image: img.dressSitting, alt: "Cô dâu ngồi khoe chân váy bồng trên nền đỏ", position: "60% 50%" },
  { id: "VT01", category: "vest", name: "Vest Be Nơ Kem", style: "Tông be, nơ kem trẻ trung", image: img.vestBeige, alt: "Chú rể mặc vest màu be thắt nơ kem", position: "25% 50%" },
  { id: "VT02", category: "vest", name: "Tuxedo Trắng Ngà", style: "Áo trắng ngà, quần đen", image: img.vestWhite, alt: "Chú rể mặc tuxedo trắng ngà", position: "30% 50%" },
  { id: "VT03", category: "vest", name: "Tuxedo Đen Cổ Điển", style: "Đen lịch lãm, nơ đen", image: img.vestBlack, alt: "Chú rể mặc tuxedo đen cổ điển", position: "35% 50%" },
  { id: "VT04", category: "vest", name: "Vest Kẻ Ô Cá Tính", style: "Áo kẻ ô, quần đen", image: img.vestGrey, alt: "Chú rể mặc vest kẻ ô cá tính", position: "78% 50%" },
  { id: "AD01", category: "ao-dai", name: "Áo Dài Ren Hoa Trắng", style: "Cổ cao, ren hoa tay dài", image: img.aoDai, alt: "Cô dâu mặc áo dài cưới ren hoa trắng" },
];

/** FR-12 — Video trend. DEMO: chưa có link video thật (Q7) → mở fanpage */
export const videos: { title: string; image: string; alt: string; position?: string }[] = [
  { title: "Clip nâng ly ngày cưới", image: img.video1, alt: "Ảnh bìa video cô dâu chú rể nâng ly", position: "50% 50%" },
  { title: "Nụ hôn dưới đèn chùm", image: img.video2, alt: "Ảnh bìa video cặp đôi hôn nhau dưới đèn chùm", position: "45% 50%" },
  { title: "Khăn voan bay trong gió", image: img.video3, alt: "Ảnh bìa video khăn voan bay trong vườn", position: "55% 50%" },
];

/** FR-07 — DEMO: cảm nhận minh hoạ, thay bằng đánh giá thật từ fanpage (Q9) */
export const testimonials: { name: string; place: string; quote: string; avatar: string; position?: string }[] = [
  {
    name: "Minh Tuấn & Thu Hà",
    place: "Ý Yên",
    quote: "Ekip rất nhiệt tình, chỉ từng dáng đứng nên tụi mình không hề ngại ống kính. Ảnh lên màu trong trẻo đúng chất Hàn như mong muốn.",
    avatar: img.avatar1,
    position: "50% 30%",
  },
  {
    name: "Đức Anh & Ngọc Mai",
    place: "Nam Định",
    quote: "Thử váy, trang điểm rồi chụp đều ở một chỗ nên tiết kiệm thời gian. Video đu trend hậu trường được bạn bè khen quá trời.",
    avatar: img.avatar2,
    position: "50% 25%",
  },
  {
    name: "Quang Huy & Phương Linh",
    place: "Ninh Bình",
    quote: "Buổi chụp ngoại cảnh rất suôn sẻ, giá cả rõ ràng từ đầu. Album nhận về đẹp hơn cả tụi mình tưởng tượng.",
    avatar: img.avatar3,
    position: "50% 25%",
  },
];
