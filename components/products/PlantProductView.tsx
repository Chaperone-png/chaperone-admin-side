import { FC, useMemo } from "react";
import usePlantSelection from "@/hooks/productSelection/usePlantSelection";
import ProductDetail from "./ProductDetail/ProductDetail";
import { PlantProductViewProps } from "@/types/ProductDetail";
import { formatProductImages } from "@/utils/ImageUtils";
import ProductImageSlider from "./ProductDetail/ProductImageSlider/ProductImageSlider";
import SimilarProducts from "./ProductDetail/SimilarProducts";
import Youmightlike from "./ProductDetail/Youmightlike";
import CustomerReviews from "../common/UI/CustomerReviews/CustomerReviews";

const PlantProductView: FC<PlantProductViewProps> = ({ plant }) => {
  const {
    selectedSize,
    setSelectedSize,
    finalPrice,
    isInOffer,
    offerPercent,
    finalValueWithOffer,
    createItem,
    currentImages,
    containerType,
    setContainerType,
  } = usePlantSelection(plant);

  return (
    <div className="mx-auto max-w-7xl responsive-px-15 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ProductImageSlider
            key={`${selectedSize?.containers?.[0]?.type}-${
              containerType?.type || "default"
            }`}
            productName={plant.product_name}
            images={formatProductImages(currentImages, plant.product_name)}
          />
        </div>
        <div>
          <ProductDetail
            productName={plant.product_name}
            productId={String(plant.product_id)}
            productType={"plant"}
            availableSizes={plant.available_sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            finalPrice={finalPrice}
            isInOffer={isInOffer}
            offerPercent={offerPercent}
            finalValueWithOffer={finalValueWithOffer}
            createItem={createItem}
            rating={plant.rating}
            wishlist_count={plant.wishlist_count}
            sold_quantity={plant.sold_quantity}
            description={plant.description}
            faqs={plant.faqs}
            containerType={containerType}
            setContainerType={setContainerType}
            tags={plant.tags}
            status={plant.status}
            zodiacSign={plant.zodiac_sign}
            plantBenefits={plant.plant_benefits}
            plantCareTips={plant.plant_care_tips}
            stock={selectedSize?.containers?.[0]?.stock}
          />
        </div>
      </div>
      <SimilarProducts />
      <CustomerReviews />
      <Youmightlike />
    </div>
  );
};

export default PlantProductView;
