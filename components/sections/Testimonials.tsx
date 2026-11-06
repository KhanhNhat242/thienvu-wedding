"use client";

import ProfileCard from "@/components/reactbits/ProfileCard";
import { IconCalendar } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { container, delay, headingGap } from "@/components/ui/styles";
import { testimonials } from "@/data/content";
import { requestBooking } from "@/lib/booking-events";
import { nb } from "@/lib/typography";

/** URL ảnh đã tối ưu bởi Next — ProfileCard dùng <img> thường */
const optimized = (src: string, w: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75`;

/**
 * FR-07 — Cảm nhận khách hàng bằng ProfileCard (React Bits): thẻ nghiêng 3D + ánh holo theo chuột.
 * Ô ảnh: ảnh cưới của cặp đôi + tên + lời nhận xét. Hàng dưới: ảnh nhỏ, địa điểm · điểm, nút "Đặt lịch".
 * DEMO: nội dung & điểm minh hoạ (Q9).
 */
export default function Testimonials() {
  return (
    <section id="cam-nhan" aria-labelledby="testimonials-title" className="bg-ivory py-16 sm:py-20 lg:py-24">
      <div className={container}>
        <SectionHeading
          id="testimonials-title"
          title="Lời Nhắn Từ Các Cặp Đôi"
          description="Niềm vui của hai bạn là động lực lớn nhất của ekip Thiên Vũ."
        />

        <ul
          className={`${headingGap} testi-cards no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pt-2 pb-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-8 lg:overflow-visible lg:px-0`}
          aria-label="Danh sách cảm nhận khách hàng"
        >
          {testimonials.map((t, i) => (
            <li key={t.name} data-reveal="up" style={delay(i * 100)} className="w-[300px] shrink-0 snap-center sm:w-[340px]">
              <ProfileCard
                avatarUrl={optimized(t.avatar, 640)}
                miniAvatarUrl={optimized(t.avatar, 128)}
                name={nb(t.name)}
                title={nb(t.quote)}
                handle=""
                status={`${t.place} · ★ ${t.rating.toFixed(1)}`}
                statusColor="#5B6B4E"
                contactText="Đặt lịch"
                contactIcon={<IconCalendar className="size-4" />}
                onContactClick={() => requestBooking({})}
                theme="light"
                holo={0.8}
                glare={0.5}
                tiltStrength={12}
                parallax={8}
                radius={16}
                enableTilt
                intro
                showUserInfo
                enableMobileTilt={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
