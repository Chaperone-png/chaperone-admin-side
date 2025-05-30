import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { getSliderSettings } from "@/helpers/public";
import { getSwiperSliderConfig } from "@/configs/constants/SwiperSlider";
import { ThumbnailSliderProps } from "@/types/ProductDetail";

const ThumbnailSlider: React.FC<ThumbnailSliderProps> = ({
  images,
  currentIndex,
  onThumbnailClick,
}) => {
  return (
    <Swiper
      {...getSliderSettings(
        getSwiperSliderConfig({
          sliderType: "productSliderNav",
          navigationNextElClass: ".swiper-button-next",
          navigationPrevElClass: ".swiper-button-prev",
        })
      )}
      className="slide-nav"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.id}>
          <div
            className={`thumbnail-slider-sm-image ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => onThumbnailClick(index)}
          >
            <div className="image-wrapper">
              <Image
                src={image.src}
                width={90}
                height={90}
                alt={image.alt || "Thumbnail Slider Image"}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ThumbnailSlider;
