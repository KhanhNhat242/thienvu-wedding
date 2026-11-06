import Logo from "@/components/ui/Logo";
import { IconFacebook } from "@/components/ui/Icons";
import { container } from "@/components/ui/styles";
import { navItems, siteConfig } from "@/lib/site-config";
import { nb } from "@/lib/typography";

/** FR-13 — Footer 3 cột, nền xanh rêu sẫm của logo */
export default function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className={`${container} grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16`}>
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="ivory" size="lg" />
          <p className="mt-6 max-w-[340px] text-[14.5px] leading-relaxed text-ivory/70">
            {nb("Studio ảnh cưới phong cách Hàn Quốc tại Ý Yên – lưu giữ trọn vẹn thanh xuân của hai bạn.")}
          </p>
        </div>

        <nav aria-label="Liên kết nhanh">
          <p className="font-serif text-[1.35rem] text-ivory">Liên kết nhanh</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-ivory/70">
            {[...navItems, { href: "#video", label: "Video trend" }, { href: "#cam-nhan", label: "Cảm nhận" }].map(
              (item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-ivory">
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div>
          <p className="font-serif text-[1.35rem] text-ivory">Liên hệ</p>
          <ul className="mt-5 space-y-3 text-[14px] text-ivory/70">
            <li>{siteConfig.address}</li>
            <li>
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-ivory">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>{siteConfig.openingHours}</li>
          </ul>
          <a
            href={siteConfig.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-[2px] border border-ivory/25 px-5 text-[13.5px] transition-colors hover:bg-ivory hover:text-forest"
          >
            <IconFacebook className="size-[18px]" />
            Fanpage THIENVUSTUDIO
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div
          className={`${container} flex flex-col gap-2 py-6 pb-24 text-[12.5px] text-ivory/50 sm:flex-row sm:justify-between sm:pb-6`}
        >
          <p>© 2026 {siteConfig.brandFull}. Bảo lưu mọi quyền.</p>
          <p>Ý Yên · Ninh Bình</p>
        </div>
      </div>
    </footer>
  );
}
