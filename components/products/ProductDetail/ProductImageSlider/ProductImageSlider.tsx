import React, { useRef, useState } from "react";
import "./product-image-slider.scss";
import ImageMagnifierPopover from "./ImageMangnifierPopover";
import ImagePreviewModal from "./ImagePreviewModal";
import MainImageSlider from "./MainImageSlider";
import ThumbnailSlider from "./ThumbnailSlider";
import { ProductImageSliderProps } from "@/types/ProductDetail";

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainSwiperRef = useRef<any>(null);

  const handleOpenModal = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="common-slider thumbnail-slider mb-10">
      <MainImageSlider
        images={images}
        onImageClick={handleOpenModal}
        onMouseEnter={(src) => {
          setHoveredImage(src);
          setPopoverVisible(true);
        }}
        onMouseLeave={() => setPopoverVisible(false)}
        onMouseMove={(e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }}
        onSwiperInit={(swiper) => (mainSwiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      />

      <ThumbnailSlider
        images={images}
        currentIndex={currentIndex}
        onThumbnailClick={(index) => mainSwiperRef.current?.slideTo(index)}
      />

      <ImagePreviewModal
        open={open}
        imageSrc={selectedImage}
        onClose={() => setOpen(false)}
      />

      <ImageMagnifierPopover
        imageSrc={hoveredImage || ""}
        visible={popoverVisible}
        mousePosition={mousePosition}
      />
    </div>
  );
};

export default ProductImageSlider;
