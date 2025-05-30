"use client";
import { useParams } from "next/navigation";
import ProductCardTags from "../../common/Card/CommonComponents/ProductCardTags";
import PriceDisplay from "../../common/Card/CommonComponents/PriceDisplay";
import PlantCareTipsAndBenefits from "./PlantCareTipsAndBenefits/page";
import ProductMeta from "./ProductMeta";
import ProductDescription from "./ProductDescription";
import ProductHeader from "./ProductHeader";
import "./ProductDetail.scss";
import { ProductDetailsProp } from "@/types/ProductDetail";
import ProductSizeSelector from "@/components/common/Card/CommonComponents/ProductSizeSelector";
import ProductPotSelector from "@/components/common/Card/CommonComponents/ProductPotSelector";
import ProductColorSelector from "@/components/common/Card/CommonComponents/ProductColorSelector";
import CardActions from "@/components/common/Card/CommonComponents/CardActions";
import { useMemo } from "react";
import Image from "next/image";
import FastDelivery from "@/public/assets/images/product-detail/fast-delivery.gif";
import MobileAnimation from "@/public/assets/images/product-detail/mobileAnimation.gif";
import CuponAnimation from "@/public/assets/images/product-detail/cuponAnimation.gif";
import DeliveryPincodeChecker from "./DeliveryPincodeChecker";

import SizeChart from "./SizeChart";
import ZodiacSign from "./ZodiacSign";
const ProductDetail: React.FC<ProductDetailsProp> = ({
  productId,
  productName,
  productType,
  availableSizes,
  selectedSize,
  setSelectedSize,
  finalPrice,
  isInOffer,
  offerPercent,
  finalValueWithOffer,
  createItem,
  rating,
  wishlist_count,
  sold_quantity,
  description,
  faqs,
  colorType,
  setColorType,
  containerType,
  setContainerType,
  tags,
  status,
  zodiacSign,
  stock,
  plantBenefits,
  plantCareTips,
}) => {
  const params = useParams();
  const rawSlug = params.productSlug;
  const productSlug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const memoizedCartItem = useMemo(() => createItem(), [createItem]);

  return (
    <div className="product-detail-wrapper">
      <ProductCardTags tags={tags} />
      <ProductHeader productName={productName} productSlug={productSlug} />
      <div className="flex justify-between items-center">
        <PriceDisplay
          price={finalPrice}
          isInOffer={isInOffer}
          offerPercent={offerPercent}
          discountedPrice={finalValueWithOffer}
        />
        <ProductMeta
          soldQuantity={sold_quantity}
          rating={rating?.average_rating}
        />
      </div>
      <hr className="my-4 border-double border-gray-300" />
      <div className="mb-4">
        <ProductDescription description={description} />
      </div>
      {zodiacSign && <ZodiacSign sign={zodiacSign} />}
      <div className="product-color-selector">
        {productType == "plant" && (
          <ProductPotSelector
            availableContainersList={selectedSize?.containers || []}
            containerType={containerType}
            setContainerType={setContainerType}
          />
        )}

        {productType == "potPlanter" && (
          <ProductColorSelector
            availableColorsList={selectedSize?.colors || []}
            colorType={colorType}
            setColorType={setColorType}
          />
        )}
      </div>
      <div className="flex justify-between product-size-selector mt-4 items-center">
        <div>
          <ProductSizeSelector
            availableSizesList={availableSizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
        <SizeChart productType={productType} />
      </div>

      <div className="product-actions-section">
        <CardActions
          cartItem={memoizedCartItem}
          productStatus={status}
          currentStock={stock || 0}
        />
      </div>
      <div className="flex justify-between mt-2 items-center">
        <div className="flex items-center gap-2">
          <Image src={FastDelivery} alt="FastDelivery" width={65} height={50} />
          <h4 className="font-bold text-[var(--text-Primary)]">
            Fast Delivery
          </h4>
        </div>
        <div>
          <DeliveryPincodeChecker />
        </div>
      </div>
      <div className="flex justify-between mt-2 items-center gap-2 rounded-md bg-[var(--skyLight)] ">
        <div>
          <Image
            src={MobileAnimation}
            alt="MobileAnimation"
            width={127}
            height={127}
          />
        </div>
        <div>
          <h4 className="text-xl">
            Use Code : <span className="font-bold">PLANT101</span>
          </h4>
          <p className="text-sm text-[var(--text-black-light-color)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div>
          <Image
            src={CuponAnimation}
            alt="cuponAnimation"
            width={153}
            height={137}
          />
        </div>
      </div>

      {productType == "plant" && (
        <PlantCareTipsAndBenefits
          plantCareTips={plantCareTips}
          plantBenefits={plantBenefits}
        />
      )}
    </div>
  );
};

export default ProductDetail;
