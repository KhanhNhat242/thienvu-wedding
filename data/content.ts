import { img } from "./images";

// Nội dung trang dạng dữ liệu (R-STRUCTURE). Mục nào có "DEMO" là nội dung minh hoạ, chờ dữ liệu thật.

/** USP U1–U3 (docs/REQUIREMENTS.md mục 6; U4 đã bỏ theo yêu cầu). image: ảnh nền hiện khi hover cột ở phần Giới thiệu */
export const usps: { id: string; title: string; text: string; image: string }[] = [
  {
    id: "U1",
    title: "Chuẩn Hàn Ngay Tại Ý Yên",
    text: "Concept ánh sáng trong trẻo, hiện đại mà không cần vất vả di chuyển lên thành phố.",
    image: img.studio1,
  },
  {
    id: "U2",
    title: "Trọn Gói Tại Một Nơi",
    text: "Từ chụp ảnh, váy cưới, vest, áo dài đến trang điểm và quay phim ngày cưới.",
    image: img.s3,
  },
  {
    id: "U3",
    title: "Linh Hoạt Cả Tuần",
    text: "Mở cửa tất cả các ngày trong tuần, hỗ trợ đặt lịch tư vấn online nhanh chóng.",
    image: img.outdoor6,
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

/**
 * FR-03 — Album ảnh (bố cục trái tim). 30 ảnh chọn ngẫu nhiên (trộn với hạt giống cố định để
 * thứ tự ổn định giữa server/client) từ public/images/library, bỏ qua ảnh có chữ in đè.
 * 21 ảnh đầu xếp thành trái tim; phần còn lại xem tiếp qua nút "Xem thêm".
 */
export type AlbumPhoto = { src: string; alt: string };

const albumFiles: { file: string; alt: string }[] = [
  { file: "773975693_1710875427714110_6560183719710818807_n.jpg", alt: "Cặp đôi vest kem bên cánh cửa xanh" },
  { file: "805924668_1737576855043967_8758540415576232045_n.jpg", alt: "Chú rể nâng ly bên cô dâu váy bồng" },
  { file: "797726410_1731266569008329_1054078582719370145_n.jpg", alt: "Cặp đôi cầm bảng Save the Date" },
  { file: "773686654_1710860304382289_1061840928892279742_n.jpg", alt: "Cô dâu khoác tay chú rể giữa vườn cây" },
  { file: "769055609_1702887361846250_7464289354712486402_n.jpg", alt: "Nụ hôn dưới đèn chùm trong tiệc cưới" },
  { file: "798216874_1732208888914097_508599065890868547_n.jpg", alt: "Cánh hoa bay bên hồ núi" },
  { file: "755808292_1690915609710092_3746661765511353082_n.jpg", alt: "Cô dâu áo dài ren cầm bó hoa đỏ" },
  { file: "788780826_1725730212895298_7092418260611113145_n.jpg", alt: "Chi tiết váy cưới trễ vai đính ren" },
  { file: "788816781_1726822322786087_7975857372942698245_n.jpg", alt: "Ekip chỉnh tà váy cưới cho cô dâu" },
  { file: "767586015_1702887321846254_3018251198176677306_n.jpg", alt: "Cặp đôi dưới đèn chùm pha lê" },
  { file: "805700083_1737576811710638_2093118580540751129_n.jpg", alt: "Cặp đôi trên nền rèm nhung đỏ" },
  { file: "774407290_1710860257715627_7125657065786455910_n.jpg", alt: "Cô dâu với khăn voan dài thướt tha" },
  { file: "773716734_1710860244382295_7340598227446357568_n.jpg", alt: "Khăn voan bay trong khu vườn" },
  { file: "757186245_1690915626376757_3076179358957441603_n.jpg", alt: "Cô dâu áo dài ren mỉm cười" },
  { file: "768966003_1702887335179586_4782208588533085702_n.jpg", alt: "Cặp đôi bên bàn tiệc nến và hoa" },
  { file: "797912464_1732208762247443_5104969656683056277_n.jpg", alt: "Cặp đôi bên hồ nước Ninh Bình" },
  { file: "798020510_1732213692246950_3736078186054212848_n.jpg", alt: "Cô dâu tựa vai chú rể trên bậc thềm cổ" },
  { file: "805512062_1737576525044000_5069613191797178806_n.jpg", alt: "Cô dâu ngồi khoe chân váy bồng trên nền đỏ" },
  { file: "775602961_1710875424380777_6329965783502562688_n.jpg", alt: "Cận cảnh cặp đôi mỉm cười" },
  { file: "789217732_1725730216228631_2832376070915064839_n.jpg", alt: "Váy cưới công chúa trên ma-nơ-canh" },
  { file: "805764787_1737576955043957_8632249629913621431_n.jpg", alt: "Cô dâu váy cúp ngực tùng xòe, rèm đỏ" },
  { file: "798216884_1732208772247442_59448861606606421_n.jpg", alt: "Cặp đôi dưới chân núi đá Ninh Bình" },
  { file: "774196868_1710875467714106_9083195556640985337_n.jpg", alt: "Cặp đôi cười rạng rỡ trong studio" },
  { file: "757027145_1690915603043426_4341065380052805207_n.jpg", alt: "Cận cảnh cô dâu áo dài ren" },
  { file: "773786348_1710860247715628_6772476670808272361_n.jpg", alt: "Chú rể nâng niu gương mặt cô dâu" },
  { file: "773492410_1708808257920827_2743680030703700273_n.jpg", alt: "Cặp đôi đồ trắng trên sân thượng nắng ấm" },
  { file: "798038948_1732213665580286_8600692594707488672_n.jpg", alt: "Cô dâu chú rể trước cổng gỗ cổ kính" },
  { file: "767586050_1702887318512921_2142566620814072814_n.jpg", alt: "Cô dâu chú rể nâng ly bên tháp sâm panh" },
  { file: "797776525_1731266605674992_5171314728595794184_n.jpg", alt: "Cặp đôi Save the Date trong vườn" },
  { file: "798717624_1732208768914109_10858752656385835_n.jpg", alt: "Cặp đôi bên hồ cạnh tường hoa trắng" },
];

export const albumPhotos: AlbumPhoto[] = albumFiles.map(({ file, alt }) => ({
  src: `/images/library/${file}`,
  alt,
}));

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
/** rating: DEMO — điểm đánh giá minh hoạ, thay bằng đánh giá thật từ fanpage (Q9) */
export const testimonials: { name: string; place: string; quote: string; avatar: string; position?: string; rating: number }[] = [
  {
    name: "Minh Tuấn & Thu Hà",
    place: "Ý Yên",
    quote: "Ekip rất nhiệt tình, chỉ từng dáng đứng nên tụi mình không hề ngại ống kính. Ảnh lên màu trong trẻo đúng chất Hàn như mong muốn.",
    avatar: img.avatar1,
    position: "50% 30%",
    rating: 5,
  },
  {
    name: "Đức Anh & Ngọc Mai",
    place: "Nam Định",
    quote: "Thử váy, trang điểm rồi chụp đều ở một chỗ nên tiết kiệm thời gian. Video đu trend hậu trường được bạn bè khen quá trời.",
    avatar: img.avatar2,
    position: "50% 25%",
    rating: 5,
  },
  {
    name: "Quang Huy & Phương Linh",
    place: "Ninh Bình",
    quote: "Buổi chụp ngoại cảnh rất suôn sẻ, giá cả rõ ràng từ đầu. Album nhận về đẹp hơn cả tụi mình tưởng tượng.",
    avatar: img.avatar3,
    position: "50% 25%",
    rating: 5,
  },
];
