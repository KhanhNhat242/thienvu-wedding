# TÀI LIỆU YÊU CẦU — WEBSITE DEMO THIENVUWEDDING

> **Nguồn:** Phiếu DEV 55 – THIENVUWEDDING (sale ghi, file `thienvu-wedding.pdf`).
> **Đây là nguồn sự thật (source of truth) của dự án.** Mọi tính năng, nội dung, thiết kế phải truy ngược được về một mục trong tài liệu này. Muốn làm khác hoặc thêm mới → cập nhật tài liệu này trước (xem mục 12).

---

## 1. Thông tin phiếu

| Trường | Giá trị (nguyên văn phiếu) | Ghi chú dev |
|---|---|---|
| STT phiếu | 55 | |
| Ngày giao hồ sơ | 03/11/2026 | |
| Hạn giao demo | 03/11/2026 | Trùng ngày giao hồ sơ → **đã quá hạn** (hôm nay 06/11/2026). Ưu tiên ra bản demo chạy được sớm nhất. |
| Sale phụ trách | Khánh Duy | |
| Mã DN (file sale) | DN0076 | |
| Ưu tiên (GĐ chọn) | *(trống)* | |
| Khách đồng ý xem demo | Có | |

### Ô dev phải điền trên phiếu (ô vàng)
Phiếu ghi "Dev điền 3 ô vàng" nhưng thực tế có **4 ô vàng** — điền đủ cả 4:
1. **Dev phụ trách** — chọn tên.
2. **Trạng thái demo** — chọn trạng thái.
3. **Link demo** — dán link demo đã deploy.
4. **Trạng thái gửi sale** — chọn **"Xong - chờ sale gửi"** khi hoàn tất (phiếu sẽ tự đóng).

---

## 2. Thông tin doanh nghiệp

| Trường | Giá trị | Ghi chú dev |
|---|---|---|
| Tên doanh nghiệp | THIENVUWEDDING | Fanpage tên **THIENVUSTUDIO**. Tên hiển thị tạm dùng: **"Thiên Vũ Wedding"** — cần sale xác nhận (Q1). Đặt ở 1 hằng số duy nhất để đổi 1 chỗ. |
| Ngành (phiếu ghi) | Spa / Thẩm mỹ / Làm đẹp | **Không khớp thực tế.** Đây là **studio ảnh cưới / dịch vụ cưới trọn gói**. Website theo ngành thực tế (Q2). |
| Địa chỉ | Ý Yên, Ninh Bình, Việt Nam | Theo địa giới sau sáp nhập 2025 (Nam Định cũ nay thuộc Ninh Bình). Địa chỉ chi tiết **chưa có** → lấy từ Google Maps / hỏi sale (Q3). Không tự bịa số nhà. |
| Người liên hệ | Thiên Vũ | |
| SĐT / Zalo | 0974569193 | Hiển thị: `0974 569 193`. `tel:0974569193`, Zalo: `https://zalo.me/0974569193`. |
| Facebook Page | https://www.facebook.com/THIENVUSTUDIO | Link gốc trên phiếu có tham số tracking (`mibextid`, `rdid`, `share_url`) → **bỏ hết**, chỉ dùng link sạch này. |
| Messenger | `https://m.me/THIENVUSTUDIO` | Suy ra từ username fanpage — phải mở thử để xác nhận trước khi giao. |
| Google Maps | https://maps.app.goo.gl/WT4SccJhe4ePhc8A6 | Link rút gọn **không nhúng iframe được** → lấy mã nhúng (Share → Embed a map) của đúng địa điểm này. |
| Website hiện tại | Không | Đây là website đầu tiên. |
| Logo | Drive: https://drive.google.com/drive/u/0/folders/1pgzFaj50CsMAKNa9PfVHtBLv2HPAEtdC | Cùng thư mục với ảnh. `public/images/temp-logo.png` hiện là **logo giả (icon quả cầu)** — phải thay bằng logo thật. |
| Ảnh / tư liệu | (cùng link Drive ở trên) | Chỉ dùng ảnh của khách; nếu thiếu, ảnh minh hoạ phải đúng chủ đề cưới Hàn Quốc và đánh dấu tạm (xem R-CONTENT). |

---

## 3. Mục tiêu website

- **Mục tiêu (phiếu):** Giới thiệu công ty / dịch vụ.
- **Mục tiêu kinh doanh suy ra:** biến người xem (chủ yếu đến từ Facebook, trên điện thoại) thành **khách đặt lịch chụp / tư vấn** — qua form, gọi điện, Zalo, Messenger.
- **Ngoài phạm vi (KHÔNG làm):** giỏ hàng, thanh toán online, đăng nhập/tài khoản, trang quản trị, đa ngôn ngữ, blog — trừ khi tài liệu này được cập nhật.

---

## 4. Khách hàng mục tiêu

- Các cặp đôi **22–32 tuổi** sắp cưới.
- Khu vực: Ý Yên và vùng lân cận — Nam Định, Ninh Bình, Hà Nam (tên cũ; nay đều thuộc tỉnh Ninh Bình mới).
- Thích **phong cách ảnh Hàn Quốc trẻ trung**.
- **Ngân sách vừa phải** → giọng văn gần gũi, minh bạch giá, không phô trương xa xỉ.
- Hệ quả thiết kế: **mobile-first** (đa số xem trên điện thoại từ Facebook/Zalo), tải nhanh, nút liên hệ luôn trong tầm tay.

---

## 5. Dịch vụ chính (5 mục — đúng thứ tự phiếu)

| ID | Dịch vụ | Chi tiết |
|---|---|---|
| S1 | Chụp ảnh cưới | Studio, phim trường, ngoại cảnh |
| S2 | Chụp ảnh phóng sự ngày cưới | Lễ ăn hỏi, lễ cưới |
| S3 | Cho thuê trang phục cưới | Váy cưới, vest, áo dài cưới |
| S4 | Trang điểm cô dâu | |
| S5 | Quay phim cưới | Video cưới, **video trend ngắn** |

---

## 6. Điểm mạnh / khác biệt (USP) — phải thể hiện rõ trên trang

| ID | USP |
|---|---|
| U1 | Studio cưới **phong cách Hàn Quốc ngay tại Ý Yên**, không phải lên thành phố |
| U2 | **Trọn gói** ảnh, váy, makeup, video **tại một nơi** |
| U3 | **Mở cửa cả tuần**, **đặt lịch online** |
| U4 | Bắt kịp xu hướng — **video "đu trend" cùng cô dâu** |

> Giờ mở cửa cụ thể chưa có → chỉ ghi "Mở cửa tất cả các ngày trong tuần" cho tới khi khách cung cấp giờ (Q4).

---

## 7. Yêu cầu chức năng

> Phiếu để trống ô "Chức năng cần có" nhưng ghi danh sách chức năng vào ô "Nội dung sẵn có". Hiểu là: **đây là danh sách chức năng bắt buộc**, và **nội dung thật (giới thiệu, bảng giá, giờ mở cửa) chưa được cung cấp**.

| ID | Chức năng | Tiêu chí nghiệm thu |
|---|---|---|
| **FR-01** | **Form đặt lịch chụp / tư vấn** | Trường: Họ tên (bắt buộc), SĐT (bắt buộc, số VN hợp lệ), **Chọn gói** (bắt buộc, lấy từ danh sách gói FR-02 + "Chưa chọn – cần tư vấn"), **Ngày dự kiến** (không cho chọn ngày quá khứ, định dạng `DD/MM/YYYY`), Ghi chú (tuỳ chọn). Validate cả client và server. Có trạng thái đang gửi, thành công, lỗi — bằng tiếng Việt. Nơi nhận dữ liệu: xem Q5. Từ thẻ gói ở bảng giá bấm "Đặt lịch" → cuộn tới form và **chọn sẵn gói đó**. |
| **FR-02** | **Bảng giá các gói chụp** | Hiển thị dạng thẻ gói (tên, giá, danh sách hạng mục bao gồm, nút "Đặt lịch gói này"). Thể hiện được tính **trọn gói** (U2). Giá thật chưa có → xem R-CONTENT. |
| **FR-03** | **Album ảnh lọc theo loại** | Bộ lọc tối thiểu: **Tất cả · Studio · Ngoại cảnh · Phóng sự**. (Phim trường: chỉ thêm nếu có ảnh — Q6.) Bấm ảnh mở xem lớn (lightbox) có chuyển trước/sau, đóng bằng Esc/vuốt. Lọc không tải lại trang. |
| **FR-04** | **Bộ sưu tập váy cưới** | Lưới trang phục: váy cưới, vest, áo dài cưới (có thể lọc theo 3 nhóm này). Mỗi mục: ảnh, tên/mã mẫu, nút hỏi thuê (dẫn tới Zalo hoặc form). |
| **FR-05** | **Nút liên hệ nổi** | 3 nút nổi cố định: **Gọi** (`tel:`), **Zalo**, **Messenger**. Hiển thị trên mọi trang, mọi kích thước màn hình; không che nội dung/nút quan trọng; vùng chạm ≥ 44×44px; có `aria-label` tiếng Việt. |
| **FR-06** | **Bản đồ Google Maps chỉ đường** | Bản đồ nhúng đúng địa điểm (lazy-load) + nút "Chỉ đường" mở `https://maps.app.goo.gl/WT4SccJhe4ePhc8A6` ở tab mới. Kèm địa chỉ, SĐT. |
| **FR-07** | **Cảm nhận khách hàng** | Danh sách cảm nhận (ảnh cặp đôi, tên, nội dung ngắn, có thể kèm số sao). Dạng slider hoặc lưới; dùng được trên mobile. |

### Chức năng ngầm định (bắt buộc dù phiếu không ghi)

| ID | Chức năng | Lý do |
|---|---|---|
| FR-08 | Header cố định: logo, menu neo tới các khu vực, nút CTA "Đặt lịch" | Điều hướng + chuyển đổi |
| FR-09 | Hero ảnh lớn tràn màn hình + thông điệp chính + CTA | Phong cách "ảnh lớn tràn màn hình" |
| FR-10 | Khu Giới thiệu / Vì sao chọn chúng tôi (4 USP) | Mục tiêu "Giới thiệu công ty" |
| FR-11 | Khu Dịch vụ (5 dịch vụ S1–S5) | Phiếu |
| FR-12 | Khu Video trend / Quay phim (S5, U4) | USP U4 — nhúng video hoặc thumbnail mở Facebook/TikTok (Q7) |
| FR-13 | Footer: thông tin liên hệ, fanpage, bản quyền | Chuẩn website doanh nghiệp |
| FR-14 | SEO cơ bản: `title`, `description`, Open Graph (ảnh chia sẻ Facebook/Zalo), favicon từ logo thật, `lang="vi"` | Khách đến từ chia sẻ mạng xã hội |

### Thứ tự khu vực đề xuất (trang chủ one-page, cuộn neo)
Header → Hero → Giới thiệu/USP → Dịch vụ → Bảng giá → Album → Bộ sưu tập váy → Video trend → Cảm nhận khách hàng → Form đặt lịch → Bản đồ & Liên hệ → Footer · (Nút nổi luôn hiện).

---

## 8. Yêu cầu thiết kế (UI/UX)

| Hạng mục | Yêu cầu |
|---|---|
| Màu chủ đạo | **Trắng, kem**, điểm nhấn **xanh rêu (theo logo)**. Mã màu xanh rêu phải lấy từ logo thật; trước khi có logo dùng tạm token bên dưới. |
| Kiểu chữ | Tiêu đề **chữ có chân (serif) thanh lịch**; nội dung chữ không chân dễ đọc. Font bắt buộc có subset `vietnamese`. |
| Phong cách | **Tối giản sang trọng kiểu Hàn Quốc**, **nhiều khoảng trắng**, **ảnh lớn tràn màn hình**. |
| Chuyển động | Nhẹ nhàng, tinh tế (hệ `data-reveal` sẵn có trong `globals.css`); tôn trọng `prefers-reduced-motion`. |
| Chế độ tối | **Không** đổi sang nền tối theo hệ điều hành — thương hiệu cưới luôn nền trắng/kem. |

### Design tokens (khai báo trong `app/globals.css` → `@theme`)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--color-ivory` | `#FFFDF9` | Nền trắng ngà |
| `--color-cream` | `#F7F1E8` | Nền kem ấm (xen kẽ) |
| `--color-sand` | `#EDE3D3` | Nền chờ ảnh, viền đậm hơn |
| `--color-line` | `#EFE8DC` | Đường viền mảnh |
| `--color-moss` | `#5B6B4E` | Điểm nhấn xanh rêu, nút CTA |
| `--color-moss-dark` | `#434F39` | Hover/active, nền khu Video |
| `--color-forest` | `#2B4E2D` | **Màu thật trích từ chữ logo** — logo, footer |
| `--color-ink` | `#2B2A27` | Chữ chính |
| `--color-muted` | `#6B655C` | Chữ phụ — 5.14:1 trên nền kem (AA) |

- Font (đã kiểm tra có subset `vietnamese`): tiêu đề **Cormorant Garamond**, nội dung **Be Vietnam Pro** (`next/font/google`).
- Tương phản chữ/nền đạt WCAG AA (≥ 4.5:1 với chữ thường).

### Phong cách (cập nhật 06/11/2026)

- **Khung:** Minimal & Direct · **Màu:** Nature Distilled (ngà, kem, rêu) · **Nhịp cuộn & tiêu đề serif:** Storytelling-Driven · **Hero:** Exaggerated Minimalism (chữ serif cỡ lớn) + Hero-Centric (cao 1 màn hình).
- **Ảnh sạch:** không lớp phủ, không lọc màu, không grain trên ảnh. Chữ không đặt đè lên ảnh (trừ ô chú thích nền đặc).
- **Hero (ngoại lệ theo ảnh mẫu):** ảnh lớn bên trái trong khung lượn sóng + dải nền sóng, khối chữ căn phải, CTA viền bo tròn, icon mạng xã hội góc dưới trái; header: menu dồn phải khi ở Hero, trượt về giữa khi cuộn qua.
- **Bo góc 0–4px** (chuẩn 2px, trừ Hero), **không bóng đổ**; phân tách khu bằng nền ngà/kem xen kẽ và đường kẻ mảnh.
- Bảng giá & form: ô nhập cao 48px, viền focus 3px, form tối đa 600px, không màu khẩn cấp/đồng hồ đếm ngược, màu thành công = rêu.
- Cảm nhận: ảnh cặp đôi + trích dẫn với viền trái rêu; không sao vàng.
- Tránh dấu hiệu "AI slop": thẻ icon-tiêu đề-mô tả giống hệt nhau, nhãn/số thứ tự không mang nghĩa, quầng gradient, kính mờ, nút nhấp nháy, thẻ nổi khi hover, chữ trang trí lặp tiêu đề.

### Nhịp nền & khoảng cách (brief thiết kế Editorial Hàn Quốc)

- **Nền xen kẽ, không 2 section liền nhau cùng màu:** Hero (ngà) → Giới thiệu (kem) → Dịch vụ (ngà) → Ảnh ngoại cảnh tràn viền → Bảng giá (kem) → Album (ngà) → Trang phục (kem) → [Video (xanh rêu `#434F39`) — đang tắt trong `app/page.tsx`] → Cảm nhận (ngà) → Đặt lịch & Bản đồ (kem) → Footer (`#2B4E2D`).
- Padding dọc section: desktop 96–120px · mobile 64–80px. Tiêu đề → nội dung: 56px desktop / 40px tablet / 32px mobile (`headingGap`). Gap thẻ/ảnh: 24–32px desktop · 16–20px mobile. Khối chữ tối đa 600–680px; lề mobile 20px.
- Định lượng chữ: tiêu đề 6–10 từ, mô tả phụ ≤ 2 dòng, nội dung thẻ 15–25 từ, không đoạn văn quá 3 dòng.
- **Không để 1 chữ rớt xuống dòng cuối** trên mọi màn hình: mọi text hiển thị bọc qua `nb()` (`lib/typography.ts`) + CSS `text-wrap: balance/pretty`.
- Hero cao vừa đúng 1 màn hình: `min-h: calc(100svh - var(--header-h))`.

---

## 9. Yêu cầu nội dung

- **Ngôn ngữ: chỉ Tiếng Việt** — toàn bộ chữ hiển thị, thông báo lỗi, `aria-label`, metadata. Có dấu đầy đủ, chính tả chuẩn.
- Giọng văn: trẻ trung, ấm áp, gần gũi, chuyên nghiệp; hướng tới cặp đôi trẻ, ngân sách vừa phải.
- Nội dung **chưa được cung cấp**: bài giới thiệu, bảng giá thật, giờ mở cửa, địa chỉ chi tiết, cảm nhận khách thật, danh sách váy, ảnh album đã phân loại.
- Định dạng: giá `1.500.000đ` (dấu chấm phân cách nghìn), ngày `DD/MM/YYYY`, SĐT `0974 569 193`.

---

## 10. Yêu cầu phi chức năng

| ID | Yêu cầu |
|---|---|
| NFR-01 | Responsive, **mobile-first**; kiểm tra tối thiểu ở 360px, 768px, 1280px, 1920px. Không cuộn ngang. |
| NFR-02 | Hiệu năng: ảnh qua `next/image`, đúng `sizes`, chỉ ảnh hero dùng `preload` (Next 16 đã bỏ `priority`); ảnh nén (WebP/AVIF qua Next). Mục tiêu Lighthouse mobile Performance ≥ 85, LCP < 2,5s. |
| NFR-03 | Truy cập: HTML ngữ nghĩa, `alt` tiếng Việt có nghĩa cho mọi ảnh, focus nhìn thấy được, điều khiển được bằng bàn phím (lightbox, bộ lọc, form). |
| NFR-04 | `npm run build` và `npm run lint` chạy sạch, không lỗi TypeScript. |
| NFR-05 | Không lộ dữ liệu khách (SĐT người đặt lịch) ra client/log công khai. |

---

## 11. Câu hỏi mở / cần sale xác nhận

| # | Câu hỏi | Mặc định tạm cho demo |
|---|---|---|
| Q1 | Tên thương hiệu hiển thị: "THIENVUWEDDING", "Thiên Vũ Wedding" hay "Thiên Vũ Studio"? | "Thiên Vũ Wedding" |
| Q2 | Ngành ghi "Spa / Thẩm mỹ / Làm đẹp" — xác nhận là studio cưới? | Studio cưới |
| Q3 | Địa chỉ chi tiết? | Lấy theo Google Maps; nếu chưa có chỉ ghi "Ý Yên, Ninh Bình" |
| Q4 | Giờ mở cửa? | "Mở cửa tất cả các ngày trong tuần" |
| Q5 | Form đặt lịch gửi về đâu (email / Google Sheet / Zalo OA)? | Demo: Server Action validate + báo thành công, chưa gửi đi đâu; ghi rõ TODO cấu hình |
| Q6 | Có ảnh phim trường riêng để làm bộ lọc thứ 4 không? | Gộp vào "Studio" |
| Q7 | Video trend: link Facebook Reels / TikTok nào? | Thumbnail + link fanpage |
| Q8 | Bảng giá thật và danh sách gói? | Gói minh hoạ, ghi "Giá tham khảo" |
| Q9 | Cảm nhận khách hàng thật? | Nội dung minh hoạ (đánh dấu DEMO trong code) |
| Q10 | Website khách thích để tham khảo / điều cần tránh? | Phiếu để trống — theo mục 8 |
| Q11 | Mã màu xanh rêu chính xác của logo? | **Đã có:** trích từ logo = `#2B4E2D` (dùng cho logo/footer), `#5B6B4E` vẫn dùng cho nút/điểm nhấn |
| Q12 | Ảnh gốc độ phân giải cao? | **Đã có:** `public/images/library` đã thay bằng 56 ảnh 960–2048px; trang dùng trực tiếp qua `data/images.ts` |
| Q13 | Cam kết "liên hệ trong vòng 15 phút" và "không phát sinh chi phí ẩn" (theo brief thiết kế) — khách có đồng ý không? | Đang hiển thị theo brief |
| Q14 | Ảnh áo dài cưới | **Đã có 1 mẫu** (áo dài ren hoa trắng, AD01). Cần tên/mã thật và thêm mẫu nếu có |

---

## 12. Quy trình thay đổi yêu cầu

1. Yêu cầu mới / thay đổi → **sửa tài liệu này trước**, gán ID mới (FR-xx, NFR-xx, Qxx), không tái sử dụng ID cũ.
2. Ghi một dòng vào **Nhật ký thay đổi** bên dưới.
3. Sau đó mới sửa code; mô tả thay đổi phải nhắc ID liên quan.
4. Khi câu hỏi mở được trả lời → cập nhật bảng mục 11 (ghi câu trả lời) và sửa các chỗ dùng "mặc định tạm".

## 13. Checklist bàn giao demo

- [ ] FR-01 → FR-14 hoạt động, đạt tiêu chí nghiệm thu
- [ ] Logo thật + ảnh thật từ Drive (hoặc ảnh tạm đã liệt kê rõ)
- [ ] Không còn chữ/template thừa ("Booking Homestay", "Create Next App", `lang="en"`, logo quả cầu…)
- [ ] Mọi link liên hệ (gọi, Zalo, Messenger, Facebook, Maps) đã bấm thử trên điện thoại
- [ ] `npm run lint` + `npm run build` sạch
- [ ] Kiểm tra mobile 360px và desktop
- [ ] Deploy, lấy link demo → điền 4 ô vàng trên phiếu, chọn "Xong - chờ sale gửi"
- [ ] Gửi sale danh sách câu hỏi mở còn tồn (mục 11)

## Nhật ký thay đổi

| Ngày | Thay đổi | Người |
|---|---|---|
| 06/11/2026 | Tạo tài liệu từ Phiếu DEV 55 | Dev |
| 06/11/2026 | Dựng landing page one-page theo brief "Editorial Hàn Quốc" (10 section + banner ngoại cảnh chuyển tiếp). Cập nhật design tokens (màu logo thật `#2B4E2D`), quy chuẩn nhịp nền/khoảng cách/chống rớt chữ; thêm Q12–Q14; toạ độ Maps: 20.3175377, 106.0224283 | Dev |
| 06/11/2026 | Hero: tiêu đề dùng WarpText (React Bits, thêm thư viện ogl); Cảm nhận: ProfileCard (React Bits, bỏ phụ thuộc @hugeicons) | Dev |
| 06/11/2026 | Album: bỏ bộ lọc, bố cục trái tim 21 ảnh + nút "Xem thêm" mở popup, 30 ảnh ngẫu nhiên từ library (FR-03 không còn lọc theo loại); Trang phục: BounceCards (React Bits), nhấn ảnh mở popup ảnh lớn; Cảm nhận: bố cục thẻ theo ảnh mẫu (ảnh tròn, sao + điểm DEMO) | Dev |
| 06/11/2026 | Header hoà vào Hero (trong suốt, ẩn nút Đặt lịch ngay trong Hero); Giới thiệu theo ảnh mẫu 3 cột + hover hiện ảnh nền, bỏ U4 khỏi khu này; Dịch vụ desktop: nửa bánh xe ảnh xoay theo cuộn (rộng 50vw) + tiêu đề bên phải; Bảng giá: thẻ TiltedCard (React Bits) — mặt trước ảnh + tên + giá, nhấn lật xem chi tiết, chiều cao theo nội dung | Dev |
| 06/11/2026 | Hero theo ảnh mẫu bố cục (khung sóng, chữ căn phải, icon MXH); header dồn menu sang phải trong phạm vi Hero, có hiệu ứng trượt | Dev |
| 06/11/2026 | Thiết kế lại theo Minimal & Direct / Nature Distilled / Storytelling / Exaggerated Minimalism; gỡ các dấu hiệu AI slop; sửa lỗi `border-color` toàn cục đè màu viền Tailwind; nút liên hệ mobile thành thanh đáy | Dev |
| 06/11/2026 | Thay toàn bộ ảnh các section bằng ảnh độ phân giải cao trong `public/images/library` (ánh xạ tại `data/images.ts`); thêm mẫu áo dài AD01; Q12 đã giải quyết | Dev |
