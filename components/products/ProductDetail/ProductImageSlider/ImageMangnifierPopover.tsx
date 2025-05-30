import { ImageManginiferProps } from "@/types/ProductDetail";
import React from "react";

const ImageMagnifierPopover: React.FC<ImageManginiferProps> = ({
  imageSrc,
  visible,
  mousePosition,
}) => {
  if (!visible || !imageSrc) return null;

  return (
    <div
      className="magnifier-popover"
      style={{ left: mousePosition.x + 1, top: mousePosition.y + 1 }}
    >
      <div
        className="zoomed-image"
        style={{
          width: "500px",
          height: "500px",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "200%",
          backgroundPosition: `${-mousePosition.x / 0.8}px ${
            -mousePosition.y / 0.8
          }px`,
        }}
      />
    </div>
  );
};

export default ImageMagnifierPopover;
