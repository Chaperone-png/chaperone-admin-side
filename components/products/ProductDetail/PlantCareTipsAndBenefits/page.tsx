import React from "react";
import BenefitTipItem from "./BenefitTipItem";

import "./page.scss";
import { PlantCareTipsAndBenefitsProps } from "@/types/ProductDetail";
import {
  benefitHighlightsMap,
  careTipsHighlightsMap,
  getBenefitsOrTipsByPartialMatch,
} from "@/configs/constants/product/productDetail";
import { PlantInfoBlock } from "@/types/ProductsType/PlantType";

const PlantCareTipsAndBenefits: React.FC<PlantCareTipsAndBenefitsProps> = ({
  plantBenefits,
  plantCareTips,
}) => {
  return (
    <div className="product-detail-highlights">
      {plantBenefits && (
        <div className="mt-8">
          <h3 className="product-detail-sub-title mb-1">Plant Benefits:</h3>
          <p>{plantBenefits?.[0]?.description}</p>
          <div className="grid grid-cols-1 gap-2 mt-3">
            {plantBenefits.map((item: PlantInfoBlock, index: number) => {
              const benefit = getBenefitsOrTipsByPartialMatch(
                item.title,
                benefitHighlightsMap
              );
              return (
                <BenefitTipItem
                  key={index}
                  imageSrc={benefit.imageSrc.src}
                  title={item.title}
                  bgColor={benefit.bgColor}
                  borderColor={benefit.borderColor}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      )}

      {plantCareTips && (
        <div className="mt-4 mb-4">
          <h3 className="product-detail-sub-title mb-3">Plant Care Tips:</h3>
          <div className="grid grid-cols-1 gap-2">
            {plantCareTips.map((item: PlantInfoBlock, index: number) => {
              const careTip = getBenefitsOrTipsByPartialMatch(
                item.title,
                careTipsHighlightsMap
              );
              return (
                <BenefitTipItem
                  key={index}
                  imageSrc={careTip.imageSrc.src}
                  title={item.title}
                  bgColor={careTip.bgColor}
                  borderColor={careTip.borderColor}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantCareTipsAndBenefits;
