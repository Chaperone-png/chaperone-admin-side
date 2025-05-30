import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { getSliderSettings } from "@/helpers/public";
import { getSwiperSliderConfig } from "@/configs/constants/SwiperSlider";
import { MainImageSliderProps } from "@/types/ProductDetail";

const MainImageSlider: React.FC<MainImageSliderProps> = ({
  images,
  onImageClick,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onSwiperInit,
  onSlideChange,
}) => {
  return (
    <Swiper
      {...getSliderSettings({
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        autoplayDelay: 5000,
        ...getSwiperSliderConfig({
          sliderType: "productSlider",
          navigationNextElClass: ".swiper-button-next",
          navigationPrevElClass: ".swiper-button-prev",
        }),
      })}
      className="slide-for"
      onSwiper={onSwiperInit}
      onSlideChange={onSlideChange}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.id}>
          <div
            className="thumbnail-slider-lg-image"
            onClick={() => onImageClick(image.src, index)}
            onMouseEnter={() => onMouseEnter(image.src)}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
          >
            <div className="image-wrapper">
              <Image
                src={image.src}
                width={450}
                height={450}
                alt={image.alt || "Main Image Banner"}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainImageSlider;
