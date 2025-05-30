import MedicinalUses from "@/public/assets/images/product-detail/highlights/PlantBenefits/medicinal-uses.gif";
import AirPurification from "@/public/assets/images/product-detail/highlights/PlantBenefits/air-purification.gif";

import Soil from "@/public/assets/images/product-detail/highlights/PlantCareTips/soil.gif";
import Sunlight from "@/public/assets/images/product-detail/highlights/PlantCareTips/sunlight.gif";
import Watering from "@/public/assets/images/product-detail/highlights/PlantCareTips/watering.gif";

const DefaultIcon = Soil;

export const benefitHighlightsMap: Record<
  string,
  { imageSrc: any; bgColor: string; borderColor: string }
> = {
  medicinal: {
    imageSrc: MedicinalUses,
    bgColor: "bg-green-100",
    borderColor: "border-green-300",
  },
  air: {
    imageSrc: AirPurification,
    bgColor: "bg-blue-100",
    borderColor: "border-blue-300",
  },
};

export const careTipsHighlightsMap: Record<
  string,
  { imageSrc: any; bgColor: string; borderColor: string }
> = {
  watering: {
    imageSrc: Watering,
    bgColor: "bg-teal-100",
    borderColor: "border-teal-300",
  },
  sunlight: {
    imageSrc: Sunlight,
    bgColor: "bg-pink-100",
    borderColor: "border-pink-300",
  },
  soil: {
    imageSrc: Soil,
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-300",
  },
};

export const getDefaultBenefitsOrTips = (title: string) => ({
  imageSrc: DefaultIcon,
  bgColor: "bg-gray-100",
  borderColor: "border-gray-300",
  title,
});

export const getBenefitsOrTipsByPartialMatch = (
  title: string,
  BenefitsOrTips: Record<
    string,
    { imageSrc: any; bgColor: string; borderColor: string }
  >
) => {
  const lowerTitle = title.toLowerCase();
  for (const key of Object.keys(BenefitsOrTips)) {
    if (lowerTitle.includes(key.toLowerCase())) {
      return BenefitsOrTips[key];
    }
  }
  return getDefaultBenefitsOrTips(title);
};
