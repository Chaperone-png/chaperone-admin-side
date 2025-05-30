"use client";
import Image from "next/image";
import { offerStaticData } from "./maali-assets";

const offerData = [
  {
    image: offerStaticData?.[0]?.image,
    bgColor: offerStaticData?.[0]?.bgColor,
    title: "Soil Health Boost",
    description: "We enrich your soil for better plant growth and root health.",
  },
  {
    image: offerStaticData?.[1]?.image,
    bgColor: offerStaticData?.[1]?.bgColor,
    title: "Pest & Weed Control",
    description: "Targeted solutions to keep your garden pest and weed free.",
  },
  {
    image: offerStaticData?.[2]?.image,
    bgColor: offerStaticData?.[2]?.bgColor,
    title: "Seasonal Planting",
    description:
      "Add seasonal beauty to your garden with the right plants at the right time.",
  },
];

const OffersSection = () => {
  return (
    <div className="maali-offer mx-auto max-w-7xl responsive-px-15">
      <h2>What We Offer</h2>
      <div className="flex flex-col gap-4 w-full md:flex-row">
        {offerData.map((offer, i) => (
          <div
            key={i}
            className={`w-full md:w-1/3 flex gap-4 ${offer.bgColor} rounded-lg p-4`}
          >
            <div className="w-[180px] flex justify-center items-center">
              <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center overflow-hidden items-center">
                <Image
                  src={offer.image}
                  width={60}
                  height={60}
                  alt={offer.title || `maali_offer_image_${i}`}
                />
              </div>
            </div>
            <div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
