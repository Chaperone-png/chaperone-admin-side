"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Card from "@/components/common/Card/BaseCard";
import Button from "@/components/common/UI/Button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { getSliderSettings } from "@/helpers/public";
import { getSwiperSliderConfig } from "@/configs/constants/SwiperSlider";
import { wholeProductData } from "@/configs/constants/testDataforProducts";

const Youmightlike = () => {
  const sliderSettings = getSliderSettings(
    getSwiperSliderConfig({
      sliderType: "cards",
      navigationNextElClass: "",
      navigationPrevElClass: "",
    })
  );

  return (
    <section className="mt-16 mb-20">
      <div
        data-aos="fade-up"
        data-aos-duration="4000"
        className="mx-auto max-w-7xl responsive-px-15"
      >
        <h2 className="title-left-underline text-3xl mb-10">You might like </h2>

        <Swiper {...sliderSettings}>
          {wholeProductData.map((product, index) => (
            <SwiperSlide key={index}>
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          className="common-button mt-10 mx-auto"
          content="View All Products"
          rightIcon={<ArrowRightIcon className="size-5 text-white" />}
        />
      </div>
    </section>
  );
};

export default Youmightlike;
