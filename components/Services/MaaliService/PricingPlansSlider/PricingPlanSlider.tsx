"use client";
import { getSliderSettings } from "@/helpers/public";
import { MainBannerSlides } from "@/configs/constants/home/mainSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { getSwiperSliderConfig } from "@/configs/constants/SwiperSlider";
import SliderComponent from "./SliderComponent";
import { PricingPlanSliderProps } from "@/types/MaaliService/components";
const PricingPlanSlider: React.FC<PricingPlanSliderProps> = ({
  servicePlans,
}) => {
  const navigationNextElClass = "maali-plan-list-slider-button-next";
  const navigationPrevElClass = "maali-plan-list-slider-button-prev";
  return (
    <div>
      <SliderComponent
        slides={MainBannerSlides}
        servicePlans={servicePlans}
        settings={getSliderSettings(
          getSwiperSliderConfig({
            sliderType: "pricePlanSlider",
            navigationNextElClass: `.${navigationNextElClass}`,
            navigationPrevElClass: `.${navigationPrevElClass}`,
          })
        )}
        navigationNextElClass={navigationNextElClass}
        navigationPrevElClass={navigationPrevElClass}
      />
    </div>
  );
};
export default PricingPlanSlider;
