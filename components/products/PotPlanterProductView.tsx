import { FC, useMemo } from "react";
import usePotSelection from "@/hooks/productSelection/usePotSelection";
import { PotPlanterProductViewProps } from "@/types/ProductDetail";
import ProductDetail from "./ProductDetail/ProductDetail";
import { formatProductImages } from "@/utils/ImageUtils";
import SimilarProducts from "./ProductDetail/SimilarProducts";
import Youmightlike from "./ProductDetail/Youmightlike";
import CustomerReviews from "../common/UI/CustomerReviews/CustomerReviews";
import ProductImageSlider from "./ProductDetail/ProductImageSlider/ProductImageSlider";

const PotProductView: FC<PotPlanterProductViewProps> = ({ potPlanter }) => {
  const {
    selectedSize,
    setSelectedSize,
    finalPrice,
    isInOffer,
    offerPercent,
    finalValueWithOffer,
    createItem,
    currentImages,
    colorType,
    setColorType,
  } = usePotSelection(potPlanter);

  return (
    <div className="mx-auto max-w-7xl responsive-px-15 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ProductImageSlider
            key={colorType?.title || "default"}
            productName={potPlanter.product_name}
            images={formatProductImages(currentImages, potPlanter.product_name)}
          />
        </div>
        <div>
          <ProductDetail
            productName={potPlanter.product_name}
            productId={String(potPlanter.product_id)}
            productType={"potPlanter"}
            availableSizes={potPlanter.available_sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            finalPrice={finalPrice}
            isInOffer={isInOffer}
            offerPercent={offerPercent}
            finalValueWithOffer={finalValueWithOffer}
            createItem={createItem}
            rating={potPlanter.rating}
            wishlist_count={potPlanter.wishlist_count}
            sold_quantity={potPlanter.sold_quantity}
            description={potPlanter.description}
            faqs={potPlanter.faqs}
            colorType={colorType}
            setColorType={setColorType}
            tags={potPlanter.tags}
            status={potPlanter.status}
            zodiacSign={""}
            plantBenefits={null}
            plantCareTips={null}
            stock={selectedSize?.colors?.[0]?.stock}
          />
        </div>
      </div>

      <SimilarProducts />
      <CustomerReviews />
      <Youmightlike />
    </div>
  );
};

export default PotProductView;
