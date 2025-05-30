import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import PricingPlan from "./PricingPlan";
import prevArrow from "@/public/prevArrow.svg";
import nextArrow from "@/public/nextArrow.svg";
import { SwiperSliderComponentProps } from "@/types/MaaliService/components";

const SliderComponent = ({
  slides,
  servicePlans,
  settings,
  navigationNextElClass,
  navigationPrevElClass,
}: SwiperSliderComponentProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const getSlideClass = (index: number): string => {
    switch (index % 3) {
      case 0:
        return "plan-pink";
      case 1:
        return "plan-yellow";
      case 2:
        return "plan-green";
      default:
        return "";
    }
  };

  return (
    <div className="slider-component">
      <Swiper {...settings}>
        {servicePlans.map((planDetails, index) => (
          <SwiperSlide key={index}>
            <PricingPlan
              planDetails={planDetails}
              slideClass={getSlideClass(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-navigation">
        <div className={navigationPrevElClass}>
          <Image src={prevArrow} width={50} height={50} alt="Previous Arrow" />
        </div>
        <div className={navigationNextElClass}>
          <Image src={nextArrow} width={50} height={50} alt="Next Arrow" />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
