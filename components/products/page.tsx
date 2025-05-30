"use client";
import { FC } from "react";
import { ProductCardProps } from "@/types/ProductsType/ProductType";
import PotPlanterProductView from "./PotPlanterProductView";
import PlantProductView from "./PlantProductView";

const ProductPage: FC<ProductCardProps> = ({ product }) => {
  if (!product) return null;

  switch (product.productType) {
    case "potPlanter":
      return <PotPlanterProductView potPlanter={product} />;
    case "plant":
      return <PlantProductView plant={product} />;
    default:
      return null;
  }
};

export default ProductPage;
