import Image from "next/image";
import { delay } from "@/components/ui/styles";
import { img } from "@/data/images";
import { nb } from "@/lib/typography";

/**
 * Ảnh chuyển chương ngoại cảnh — ảnh tràn viền sạch, chú thích nằm trong ô nền ngà ở góc dưới
 * (không phủ tối, không làm mờ ảnh).
 */
export default function ScenicBanner() {
  return (
    <section aria-label="Ngoại cảnh Ninh Bình" className="relative h-[58svh] min-h-[340px] bg-sand lg:h-[78svh]">
      <Image
        src={img.banner}
        alt="Cặp đôi bên hồ nước giữa núi đá Ninh Bình"
        fill
        sizes="100vw"
        className="object-cover object-[50%_35%]"
      />
      <p
        data-reveal="up"
        style={delay(100)}
        className="absolute bottom-0 left-0 max-w-[min(560px,88%)] bg-ivory px-6 py-5 font-serif text-[1.35rem] leading-snug text-ink italic sm:px-8 sm:py-6 sm:text-[1.6rem] lg:text-[1.9rem]"
      >
        {nb("Non nước Ninh Bình – phông nền lãng mạn cho chuyện tình của hai bạn")}
      </p>
    </section>
  );
}
