<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# QUY TẮC DỰ ÁN THIENVUWEDDING (bắt buộc cho mọi thay đổi)

> Phần này nằm ngoài khối `nextjs-agent-rules` ở trên — `next dev` không ghi đè. Áp dụng cho mọi người và mọi AI agent làm việc trên repo.

## R-SOURCE — Nguồn sự thật
1. **Đọc `docs/REQUIREMENTS.md` trước khi làm bất kỳ việc gì.** Mọi tính năng, khu vực, nội dung phải truy về một ID trong đó (FR-xx, NFR-xx, S1–S5, U1–U4).
2. Không thêm tính năng ngoài tài liệu (giỏ hàng, thanh toán, đăng nhập, admin, blog, đa ngôn ngữ…). Cần thêm → cập nhật `docs/REQUIREMENTS.md` (ID mới + nhật ký thay đổi) **trước**, rồi mới code.
3. Gặp điểm mơ hồ → kiểm tra mục 11 "Câu hỏi mở"; dùng "mặc định tạm" ở đó, không tự bịa thông tin khác. Thêm câu hỏi mới vào mục 11 nếu chưa có.
4. Báo cáo/commit/PR phải nhắc ID yêu cầu liên quan (vd: `FR-03: thêm lightbox album`).

## R-STACK — Công nghệ
1. Next.js **16.4.3** (App Router, `cacheComponents: true`) — **phiên bản khác dữ liệu huấn luyện**. Trước khi dùng API nào của Next (Image, Font, Metadata, Form, Server Actions, cache, Proxy…) phải đọc file tương ứng trong `node_modules/next/dist/docs/` và tuân theo cảnh báo deprecation.
2. React 19.3, TypeScript strict, Tailwind CSS v4, Ant Design v6 (`@ant-design/nextjs-registry` đã bọc ở `app/layout.tsx`). **Không thêm thư viện mới** khi stack hiện có làm được; nếu buộc phải thêm, nêu lý do.
3. Phân vai: **Tailwind** cho layout, khoảng cách, kiểu chữ, màu. **antd** chỉ cho thành phần tương tác phức tạp (Form, DatePicker, Select, Image preview, Carousel…), theme qua `ConfigProvider` với token khớp bảng màu, `locale` = `vi_VN`, dayjs locale `vi`. Không để antd tạo ra giao diện "admin" lệch phong cách.
4. Mặc định **Server Component**. Chỉ đặt `'use client'` ở component lá cần tương tác (bộ lọc album, lightbox, form, nút nổi…). Trang (`page.tsx`) không được là client component.
5. Form dùng Server Action, validate cả client và server.
6. Ảnh dùng `next/image` (có `sizes`, `alt` tiếng Việt). Font dùng `next/font/google` với subset `vietnamese`. Không dùng `<img>`/link font CDN.

## R-STRUCTURE — Cấu trúc thư mục
```
app/                    # route, layout, metadata, server actions
components/sections/    # mỗi khu vực trang 1 file: Hero, About, Services, Pricing, Album, Dresses, Videos, Testimonials, Booking, Contact, Footer
components/ui/          # thành phần dùng lại: Button, SectionHeading, FloatingContact, Lightbox…
lib/site-config.ts      # tên thương hiệu, SĐT, Zalo, Messenger, Facebook, Maps, địa chỉ, giờ mở cửa — DUY NHẤT 1 nơi
data/                   # services.ts, packages.ts, albums.ts, dresses.ts, testimonials.ts — nội dung dạng dữ liệu có kiểu
public/images/          # logo/, hero/, album/{studio,ngoai-canh,phong-su}/, dresses/, testimonials/
docs/                   # REQUIREMENTS.md và tài liệu khác
```
- Tên file component: PascalCase; thư mục/ảnh/slug: chữ thường không dấu, gạch nối (`ngoai-canh`).
- **Không hard-code** SĐT, link, tên thương hiệu, giá trong component — luôn import từ `lib/site-config.ts` hoặc `data/`.

## R-DESIGN — Thiết kế
1. Ngà/kem làm nền (Nature Distilled), **xanh rêu chỉ làm điểm nhấn** (CTA, đường kẻ, icon). Dùng design token trong `app/globals.css` (`@theme`), không viết mã màu rời rạc trong component.
2. Tiêu đề serif thanh lịch, nội dung sans dễ đọc; nhiều khoảng trắng; ảnh lớn tràn màn hình; tối giản kiểu Hàn Quốc. Không gradient sặc sỡ, không bóng đổ nặng, không icon/emoji loè loẹt.
3. Không dùng chế độ tối theo hệ điều hành (bỏ override `prefers-color-scheme: dark`).
4. Hiệu ứng: tái sử dụng hệ `data-reveal` / `.reveal-zoom` / `.lightbox-fade` sẵn có trong `globals.css`; luôn tôn trọng `prefers-reduced-motion`.
5. Mobile-first; kiểm tra 360px → 1920px, không cuộn ngang; nút nổi (FR-05) không che CTA/form.
6. **Nền xen kẽ** ngà/kem (+1 khu xanh rêu) — không 2 section liền nhau cùng màu. Khoảng cách theo `container`, `headingGap` trong `components/ui/styles.ts` và bảng "Nhịp nền & khoảng cách" ở `docs/REQUIREMENTS.md` mục 8.
7. **Không để 1 chữ rớt xuống dòng cuối**: mọi tiêu đề/đoạn văn/gạch đầu dòng hiển thị phải bọc `nb()` từ `lib/typography.ts` (hoặc tự nối 2 từ cuối bằng ` ` khi chữ nằm trong JSX nhiều phần).
8. Section mới dùng `SectionHeading` + `data-reveal` để đồng bộ tiêu đề và hiệu ứng.
9. **Ảnh sạch**: không overlay/gradient tối, không filter (blur, grayscale, sepia), không grain trên ảnh; không đặt chữ đè lên ảnh trừ ô chú thích nền đặc.
10. **Bo góc 0–4px** (`rounded-[2px]`), **không box-shadow** trang trí (chỉ cho phép vòng focus), không `rounded-full` cho thẻ/nút/khung ảnh.
11. Không thêm: thẻ icon-tiêu đề-mô tả lặp, nhãn/số chương không mang nghĩa, quầng gradient, glassmorphism, hiệu ứng nhấp nháy/pulse, hover nhấc thẻ. Xem mục "Phong cách" trong `docs/REQUIREMENTS.md`.
12. **Ngoại lệ duy nhất: Hero** (theo ảnh mẫu khách chọn) — khung ảnh lượn sóng (SVG clipPath), nút CTA và icon mạng xã hội bo tròn. Không mang các ngoại lệ này sang section khác.
13. **Ngoại lệ có chủ đích khác (theo yêu cầu khách):** (a) Giới thiệu — hover cột hiện ảnh nền + lớp tối mờ dưới chữ; (b) Bảng giá — thẻ TiltedCard (nghiêng 3D, bóng đổ của thẻ, mặt trước ảnh + lớp tối dưới chữ, nhấn để lật xem chi tiết); (c) Dịch vụ desktop — nửa bánh xe ảnh xoay theo cuộn (`ServicesWheel`); (d) Album — bố cục trái tim + nút "Xem thêm" ở chóp; (e) Trang phục — BounceCards (thẻ xoè, bo 25px, bóng); (f) Cảm nhận — ProfileCard (thẻ nghiêng 3D, ánh holo, bóng); (g) Hero — tiêu đề WarpText (WebGL, có <h1> sr-only cho SEO). Lớp tối chỉ dùng để chữ trên ảnh đạt tương phản AA.
14. Thư viện ngoài sao chép vào `components/reactbits/` (React Bits). Giữ nguyên mã gốc, mọi chỉnh sửa phải ghi chú ở đầu file; kiểu TS khai báo trong file `.d.ts` cùng tên.
15. Header: trong phạm vi Hero menu dồn sang phải, ra khỏi Hero trượt về giữa (transition flex-grow, tắt khi reduced-motion) — giữ nguyên hành vi này khi sửa Header.
16. Màu viền mặc định nằm trong `@layer base` — không viết CSS toàn cục ngoài layer vì sẽ đè lớp tiện ích Tailwind.

## R-CONTENT — Nội dung
1. **Chỉ tiếng Việt**, có dấu đầy đủ (`<html lang="vi">`), kể cả `alt`, `aria-label`, thông báo lỗi, metadata.
2. **Không bịa dữ liệu thật**: địa chỉ, giờ mở cửa, giá, tên khách, số liệu ("1000+ cặp đôi"…). Nội dung minh hoạ phải:
   - nằm trong `data/` hoặc `lib/site-config.ts`,
   - có chú thích `// DEMO: thay bằng dữ liệu thật – xem Qx` ở ngay chỗ khai báo,
   - với giá: hiển thị kèm chữ "Giá tham khảo".
3. Ảnh: ưu tiên ảnh khách trong Drive. Ảnh tạm phải đúng chủ đề cưới Hàn Quốc, ghi nguồn trong `public/images/README.md`.
4. Link Facebook luôn là bản sạch `https://www.facebook.com/THIENVUSTUDIO` (không tham số tracking). Link ngoài mở tab mới với `rel="noopener noreferrer"`.
5. Định dạng: giá `1.500.000đ`, ngày `DD/MM/YYYY`, SĐT hiển thị `0974 569 193`.

## R-QUALITY — Hoàn thành một việc nghĩa là
- [ ] Đáp ứng tiêu chí nghiệm thu của ID liên quan trong `docs/REQUIREMENTS.md`.
- [ ] `npm run lint` và `npm run build` sạch.
- [ ] Đã xem thực tế trên trình duyệt ở mobile (360px) và desktop.
- [ ] Không còn dấu vết template ("Booking Homestay", "Create Next App", logo quả cầu, chữ tiếng Anh).
- [ ] Nếu đổi phạm vi/nội dung: đã cập nhật `docs/REQUIREMENTS.md` (mục liên quan + nhật ký thay đổi).
