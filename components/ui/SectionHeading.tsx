import { nb } from "@/lib/typography";
import { delay } from "./styles";

/** Cụm tiêu đề section: H2 serif + mô tả phụ ≤ 2 dòng. Không nhãn/số chương trang trí. */
export default function SectionHeading({
  id,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: {
  id?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const center = align === "center";
  const dark = tone === "dark";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[680px] ${className}`}>
      <h2
        id={id}
        data-reveal="up"
        className={`font-serif text-[2.125rem] leading-[1.1] font-medium sm:text-[2.6rem] lg:text-[3.25rem] ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        {nb(title)}
      </h2>
      {description && (
        <p
          data-reveal="up"
          style={delay(80)}
          className={`mt-4 text-[15px] leading-relaxed sm:text-base ${center ? "mx-auto" : ""} max-w-[600px] ${
            dark ? "text-ivory/80" : "text-muted"
          }`}
        >
          {nb(description)}
        </p>
      )}
    </div>
  );
}
