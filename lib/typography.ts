/**
 * Chống "rớt 1 chữ" xuống dòng cuối: nối 2 từ cuối bằng khoảng trắng không ngắt (U+00A0).
 * Dùng cho MỌI tiêu đề, đoạn văn, gạch đầu dòng hiển thị trên trang.
 * Kết hợp với CSS `text-wrap: balance | pretty` trong globals.css.
 */
export function nb(text: string): string {
  const trimmed = text.trim();
  const i = trimmed.lastIndexOf(" ");
  if (i <= 0) return trimmed;
  return `${trimmed.slice(0, i)} ${trimmed.slice(i + 1)}`;
}

/** Định dạng giá VNĐ: 5900000 -> "5.900.000đ" */
export function formatVnd(value: number): string {
  return `${String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`;
}
