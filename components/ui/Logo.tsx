import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/** Logo chữ THIENVU tách nền từ logo gốc + dòng "WEDDING STUDIO" dựng bằng font serif */
export default function Logo({
  variant = "moss",
  className = "",
  size = "md",
}: {
  variant?: "moss" | "ivory";
  className?: string;
  size?: "md" | "lg";
}) {
  const w = size === "lg" ? 168 : 112;
  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <Image
        src={variant === "moss" ? "/images/logo/logo-moss.png" : "/images/logo/logo-ivory.png"}
        alt={siteConfig.brandFull}
        width={w}
        height={Math.round((w * 189) / 640)}
        className="h-auto"
        style={{ width: w }}
      />
      <span
        aria-hidden
        className={`mt-1 font-serif uppercase leading-none tracking-[0.42em] ${
          size === "lg" ? "text-[12px]" : "text-[8.5px]"
        } ${variant === "moss" ? "text-forest" : "text-ivory"}`}
        style={{ marginRight: "-0.42em" }}
      >
        Wedding Studio
      </span>
    </span>
  );
}
