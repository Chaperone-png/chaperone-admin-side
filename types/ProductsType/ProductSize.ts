import { Container } from "./PlantType";
import { Color } from "./PotPlanterType";
import { GenericSizeType } from "./ProductType";

export interface BaseSize {
  size: string;
  weight: string;
  original_price: number;
  final_display_price: number;
  is_offer: boolean;
  offer_price: number;
  images: string[];
}

export interface PlantSize extends BaseSize {
  containers: Container[];
}

export interface PotPlanterSize extends BaseSize {
  colors: Color[];
}

export type productSize = PlantSize | PotPlanterSize;

export interface ProductSizeSelectorProps {
  availableSizesList: productSize[] | null;
  selectedSize: productSize | null;
  setSelectedSize: (value: any) => void;
}
