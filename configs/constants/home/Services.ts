// Service images
import maaliServiceImage from "@/public/assets/images/services/maali-service.svg";
import daycareServiceImage from "@/public/assets/images/services/daycare-service.svg";

// Icons
import ServiceIcon1 from "@/public/assets/images/services/icons/icon1.svg";
import ServiceIcon2 from "@/public/assets/images/services/icons/icon2.svg";
import ServiceIcon3 from "@/public/assets/images/services/icons/icon3.svg";
import ServiceIcon4 from "@/public/assets/images/services/icons/icon4.svg";

export const getServiceCardsData = [
  {
    id: "maali",
    title: "Expert Maali Service",
    description:
      `Transform your blooming garden dreams into reality with our convenient Maali services—just a click away!
`,
    image: maaliServiceImage,
  },
  {
    id: "daycare",
    title: "Plant Daycare",
    description:
      `Celebrate your plants' uniqueness! Join Plant Daycare for exceptional care and watch them thrive!
`,
    image: daycareServiceImage,
  },
];

export const serviceIcons = [
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
];
