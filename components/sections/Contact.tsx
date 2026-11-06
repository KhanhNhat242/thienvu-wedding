import BookingForm from "@/components/sections/BookingForm";
import { container, delay, linkArrow } from "@/components/ui/styles";
import { siteConfig } from "@/lib/site-config";
import { nb } from "@/lib/typography";

/** FR-01 + FR-06 — Đặt lịch & bản đồ liên hệ. Nền kem. */
export default function Contact() {
  const info = [
    { label: "Địa chỉ", value: siteConfig.address },
    { label: "Điện thoại / Zalo", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
    { label: "Giờ mở cửa", value: siteConfig.openingHours },
  ];

  return (
    <section id="lien-he" aria-labelledby="contact-title" className="bg-cream py-16 sm:py-20 lg:py-[110px]">
      <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-12`}>
        {/* Cột trái: thông tin + bản đồ */}
        <div className="flex flex-col">
          <h2
            id="contact-title"
            data-reveal="up"
            className="font-serif text-[2.125rem] leading-[1.1] font-medium text-ink sm:text-[2.6rem] lg:text-[3.25rem]"
          >
            {nb("Hẹn Gặp Hai Bạn Tại Studio")}
          </h2>

          <dl data-reveal="up" style={delay(80)} className="mt-8 border-t border-ink/15">
            {info.map(({ label, value, href }) => (
              <div key={label} className="grid grid-cols-[130px_1fr] gap-4 border-b border-ink/15 py-4 sm:grid-cols-[160px_1fr]">
                <dt className="pt-0.5 text-[13px] text-muted">{label}</dt>
                <dd className="text-[15.5px] font-medium text-ink">
                  {href ? (
                    <a href={href} className="hover:text-moss">
                      {value}
                    </a>
                  ) : (
                    nb(value)
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div data-reveal="up" style={delay(160)} className="mt-8 flex flex-1 flex-col">
            <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-[2px] border border-ink/10 bg-sand">
              <iframe
                src={siteConfig.mapsEmbedSrc}
                title={`Bản đồ đường đến ${siteConfig.brandFull}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            </div>
            <a
              href={siteConfig.mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkArrow} mt-5 self-start`}
            >
              Mở chỉ đường Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Cột phải: form tối đa 600px */}
        <div
          id="dat-lich"
          data-reveal="up"
          style={delay(100)}
          className="w-full max-w-[600px] scroll-mt-[calc(var(--header-h)+16px)] justify-self-center rounded-[2px] border border-ink/10 bg-ivory p-6 sm:p-9 lg:justify-self-end lg:p-10"
        >
          <h3 className="font-serif text-[1.9rem] leading-tight font-medium text-ink sm:text-[2.2rem]">
            {nb("Đặt Lịch Tư Vấn & Thử Váy")}
          </h3>
          <p className="mt-3 mb-7 text-[14.5px] leading-relaxed text-muted">
            {nb("Để lại thông tin, Thiên Vũ sẽ liên hệ qua Zalo/SĐT trong vòng 15 phút để tư vấn chi tiết.")}
          </p>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
