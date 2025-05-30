import {
  AvailableSize,
  Discount,
  FAQ,
  PlantInfoBlock,
  Rating,
  ShippingDetails,
} from "./PlantType";
import { PotPlanterAvailableSize } from "./PotPlanterType";

export interface BaseProduct {
  id: number;
  nursery_id: number;
  product_id: number;
  product_name: string;
  productType: string;
  description: string;
  category: string;
  status: string;
  sales_count: number;
  sold_quantity: number;
  total_buyers: number;
  discount?: Discount;
  shipping_details?: ShippingDetails;
  rating?: Rating;
  faqs?: FAQ[];
  frequently_bought_together?: number[];
  wishlist_count: number;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaH1: string;
}

export interface Plant extends BaseProduct {
  productType: "plant";
  scientific_name: string;
  care_instructions: string;
  light_efficiency: string;
  water_schedule: string;
  available_sizes: AvailableSize[];
  zodiac_sign: string;
  plant_benefits: PlantInfoBlock[];
  plant_care_tips: PlantInfoBlock[];
}

export interface PotPlanter extends BaseProduct {
  productType: "potPlanter";
  available_sizes: PotPlanterAvailableSize[];
}

export type Product = Plant | PotPlanter;

export interface ProductCardProps {
  product: Product | null;
}

export interface ProductListProps {
  dealOfTheDayProducts: Product[];
}

export type GenericSizeType = AvailableSize | PotPlanterAvailableSize;
