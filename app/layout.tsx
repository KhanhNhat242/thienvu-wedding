import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Suspense } from "react";
import AntdProvider from "@/components/AntdProvider";
import RevealObserver from "@/components/ui/RevealObserver";
import { siteConfig, siteUrl } from "@/lib/site-config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.brandFull} – Studio ảnh cưới Hàn Quốc tại Ý Yên`,
  description:
    "Trọn gói chụp ảnh cưới, phóng sự ngày cưới, cho thuê váy cưới, trang điểm cô dâu và quay video bắt trend ngay tại Ý Yên, Ninh Bình. Đặt lịch tư vấn online.",
  openGraph: {
    title: `${siteConfig.brandFull} – Studio ảnh cưới Hàn Quốc`,
    description:
      "Trọn gói ảnh, váy, makeup và video cưới phong cách Hàn Quốc ngay tại Ý Yên, Ninh Bình.",
    locale: "vi_VN",
    type: "website",
    siteName: siteConfig.brandFull,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${cormorant.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <AntdRegistry>
            <AntdProvider>{children}</AntdProvider>
          </AntdRegistry>
        </Suspense>
        <RevealObserver />
      </body>
    </html>
  );
}
