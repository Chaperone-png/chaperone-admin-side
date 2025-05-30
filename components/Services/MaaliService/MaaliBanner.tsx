import Button from "@/components/common/UI/Button";
import { MaaliBannerProps } from "@/types/MaaliService/components";
import React from "react";

const MaaliBanner: React.FC<MaaliBannerProps> = ({ scrollToPricing }) => (
  <div className="maali-main-banner">
    <div className="page-title-wrapper">Maali Service</div>
    <h1>Nurturing Your Green Spaces</h1>
    <p>
      At Chaperone Co., we understand that maintaining a vibrant garden requires
      time, expertise, and dedication. Our Maali Service is designed to bring
      professional gardening care right to your doorstep, ensuring your plants
      thrive year-round.
    </p>
    <Button
      className="common-button max-w-[500px]"
      content="Explore Packages"
      onClick={scrollToPricing}
    />
  </div>
);

export default MaaliBanner;
