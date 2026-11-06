import About from "@/components/sections/About";
import Album from "@/components/sections/Album";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Outfits from "@/components/sections/Outfits";
import Pricing from "@/components/sections/Pricing";
import ScenicBanner from "@/components/sections/ScenicBanner";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Videos from "@/components/sections/Videos";
import FloatingContact from "@/components/ui/FloatingContact";

/**
 * Landing page one-page — thứ tự & nền xen kẽ theo brief:
 * Hero (ngà) → Giới thiệu (kem) → Dịch vụ (ngà) → Banner ngoại cảnh → Bảng giá (kem)
 * → Album (ngà) → Trang phục (kem) → Video (xanh rêu) → Cảm nhận (ngà) → Đặt lịch & Bản đồ (kem) → Footer
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <ScenicBanner />
        <Pricing />
        <Album />
        <Outfits />
        {/* <Videos /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
