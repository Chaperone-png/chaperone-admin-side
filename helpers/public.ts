import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";

import FastDelivery from "@/public/assets/images/categories/options/img1.svg";
import EasyPayment from "@/public/assets/images/categories/options/img2.svg";
import BestOffers from "@/public/assets/images/categories/options/img3.svg";

export const StaticImagesUrl = (currentSection: string) => {
  return `assets/images/${currentSection}`;
};

//-------------------SLIDER CONFIG---------------------------------------

type BreakpointProps = {
  breakpoints: number[];
  slidesPerView: number[];
  slidesPerGroup: number[];
};

const getDefaultBreakpoints = ({
  breakpoints,
  slidesPerView,
  slidesPerGroup,
}: BreakpointProps) => {
  const result: Record<
    number,
    { slidesPerView: number; slidesPerGroup: number }
  > = {};

  breakpoints?.forEach((bp, index) => {
    result[bp] = {
      slidesPerView: slidesPerView[index] ?? 1,
      slidesPerGroup: slidesPerGroup[index] ?? 1,
    };
  });

  return result;
};

export const getSliderSettings = ({
  type = "default",
  speed = 500,
  loop = false,
  autoplayDelay = 6000,
  disableOnInteraction = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  breakpointsConfig = {},
  navigation = {},
  pauseOnMouseEnter = false,
} = {}) => {
  const breakpoints = breakpointsConfig
    ? getDefaultBreakpoints(breakpointsConfig as BreakpointProps)
    : {};

  const sharedModules = [Navigation, Autoplay, Pagination];

  const typeConfig: Record<string, Partial<any>> = {
    deal: {
      slidesPerView: 3,
      loop: false,
      modules: sharedModules,
      pagination: { el: ".swiper-pagination", clickable: true },
    },
    testimonial: {
      spaceBetween: 0,
      centeredSlides: true,
      modules: sharedModules,
    },
    categoryListing: {
      breakpoints,
      spaceBetween: 30,
      modules: [Navigation, Pagination],
    },
    card: {
      modules: sharedModules,
    },
    cards: {
      breakpoints,
      modules: [Navigation, Pagination],
    },
    productSlider: {
      slidesPerView: 1,
      loop: false,
      modules: [Navigation, Pagination, Autoplay],
    },
    pricePlanSlider: {
      slidesPerView: 3,
      spaceBetween: 50,
      loop: false,
      modules: [Navigation, Pagination],

    },
    productSliderNav: {
      slidesPerView: 4,
      loop: false,
      modules: [Navigation],
    },
    default: {
      effect: "fade",
      fadeEffect: { crossFade: true },
      modules: [...sharedModules, EffectFade],
    },
  };

  const { modules = sharedModules, ...customTypeConfig } =
    typeConfig[type] || {};

  return {
    slidesPerView: slidesToShow,
    spaceBetween: 10,
    loop,
    speed,
    autoplay: { delay: autoplayDelay, disableOnInteraction, pauseOnMouseEnter },
    slidesPerGroup: slidesToScroll,
    slideToClickedSlide: true,
    breakpoints,
    navigation,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    modules,
    ...customTypeConfig,
  };
};

export const businessHighlightsList = [
  {
    id: 1,
    icon: FastDelivery,
    title: "Fast Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    id: 2,
    icon: EasyPayment,
    title: "Easy Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    id: 3,
    icon: BestOffers,
    title: "Best Offers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

export const slugify = (name: string, id: string): string => {
  const cleanedName = name
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return `${cleanedName}--${id}`;
};

export const unslugify = (slug: string): string => {
  const [namePart] = slug.split("--");
  return namePart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const getProductIdFromSlug = (slug: string): string => {
  const parts = slug.split("--");
  return parts[1] || "";
};

export const capitalizeWords = (text: string): string => {
  if (!text) return text;
  return text
    ?.split(" ")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    ?.join(" ");
};
