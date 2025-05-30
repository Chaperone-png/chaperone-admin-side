"use client";
import Image from "next/image";

import AriseIcon from "@/public/assets/images/product-detail/Zodiac/Arise.gif";
import LeoIcon from "@/public/assets/images/product-detail/Zodiac/Leo.gif";
import VirgoIcon from "@/public/assets/images/product-detail/Zodiac/Virgo.gif";
import ScorpioIcon from "@/public/assets/images/product-detail/Zodiac/Scorpio.gif";
import SagittariusIcon from "@/public/assets/images/product-detail/Zodiac/Sagittarius.gif";
import PiscesIcon from "@/public/assets/images/product-detail/Zodiac/Pisces.gif";
import CapricornIcon from "@/public/assets/images/product-detail/Zodiac/Capricorn.gif";
import TaurusIcon from "@/public/assets/images/product-detail/Zodiac/Taurus.gif";
import LibraIcon from "@/public/assets/images/product-detail/Zodiac/Libra.gif";
import AquariusIcon from "@/public/assets/images/product-detail/Zodiac/Aquarius.gif";
import GeminiIcon from "@/public/assets/images/product-detail/Zodiac/Gemini.gif";
import CancerIcon from "@/public/assets/images/product-detail/Zodiac/Cancer.gif";
interface ZodiacSignProps {
  sign: string;
}
const zodiacImages: Record<string, any> = {
  Aries: AriseIcon,
  Leo: LeoIcon,
  Virgo: VirgoIcon,
  Scorpio: ScorpioIcon,
  Sagittarius: SagittariusIcon,
  Pisces: PiscesIcon,
  Capricorn: CapricornIcon,
  Taurus: TaurusIcon,
  Libra: LibraIcon,
  Aquarius: AquariusIcon,
  Gemini: GeminiIcon,
  Cancer: CancerIcon,
};
const ZodiacSign = ({ sign }: ZodiacSignProps) => {
  const zodiacImage = zodiacImages[sign];

  if (!zodiacImage) return null; // Optional: handle unknown signs

  return (
    <div className="flex items-center cursor-pointer">
      <span className="product-detail-sub-title mr-3">Zodiac:</span>
      <Image
        src={zodiacImage}
        alt={`${sign} Icon` || "Zodiac Sign"}
        width={50}
        height={50}
      />
      <span className="text-[var(--skyblue)] text-lg font-semibold ml-2">
        {sign}
      </span>
    </div>
  );
};

export default ZodiacSign;
