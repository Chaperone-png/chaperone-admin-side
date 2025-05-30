import { Dispatch, SetStateAction } from "react";
import {
  AvailableSize,
  Container,
  FAQ,
  Plant,
  PlantInfoBlock,
  Rating,
} from "./ProductsType/PlantType";
import {
  Color,
  PotPlanter,
  PotPlanterAvailableSize,
} from "./ProductsType/PotPlanterType";
import { CartItem } from "./ReduxSliceType/cart";

export type ProductType = "plant" | "potPlanter";

interface BaseProductDetails {
  productId: string;
  productName: string;
  finalPrice: number;
  isInOffer: boolean;
  offerPercent: number;
  finalValueWithOffer: number;
  createItem: () => CartItem | null;
  rating: Rating | undefined;
  wishlist_count: number | undefined;
  sold_quantity: number;
  description: string;
  faqs: FAQ[] | undefined;
  tags: string[];
  stock: number | undefined;
  status: string;
  zodiacSign: string;
  plantBenefits: PlantInfoBlock[] | null;
  plantCareTips: PlantInfoBlock[] | null;
}

export interface PlantProductDetails extends BaseProductDetails {
  productType: "plant";
  availableSizes: AvailableSize[];
  selectedSize: AvailableSize | null;
  setSelectedSize: Dispatch<SetStateAction<AvailableSize | null>>;
  containerType: Container | null;
  setContainerType: (container: Container | null) => void;
  colorType?: never;
  setColorType?: never;
}

export interface PotProductDetails extends BaseProductDetails {
  productType: "potPlanter";
  availableSizes: PotPlanterAvailableSize[];
  selectedSize: PotPlanterAvailableSize | null;
  setSelectedSize: Dispatch<SetStateAction<PotPlanterAvailableSize | null>>;
  colorType: Color | null;
  setColorType: (color: Color | null) => void;
  containerType?: never;
  setContainerType?: never;
}

export type ProductDetailsProp = PlantProductDetails | PotProductDetails;

export interface PlantProductViewProps {
  plant: Plant;
}

export interface PotPlanterProductViewProps {
  potPlanter: PotPlanter;
}

export interface ProductMetaProps {
  soldQuantity: number;
  rating: number | undefined;
}

export interface ProductDescriptionProps {
  description: string;
}

export interface ProductHeaderProps {
  productName: string;
  productSlug: string | undefined;
}

export interface HighlightItemProps {
  imageSrc: string;
  title: string;
  bgColor?: string;
  borderColor?: string;
  description: string;
}

export interface ImageManginiferProps {
  imageSrc: string;
  visible: boolean;
  mousePosition: { x: number; y: number };
}

export interface ImagePreviewModalProps {
  open: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export interface MainImageSliderProps {
  images: { id: number; src: string; alt: string }[];
  onImageClick: (src: string, index: number) => void;
  onMouseEnter: (src: string) => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onSwiperInit: (swiper: any) => void;
  onSlideChange: (swiper: any) => void;
}

export interface ProductImageSliderProps {
  productName: string;
  images: { id: number; src: string; alt: string }[];
}

export interface ThumbnailSliderProps {
  images: { id: number; src: string; alt: string }[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
}

export interface SizeChartProps {
  productType: string;
}

export interface PlantCareTipsAndBenefitsProps {
  plantBenefits: PlantInfoBlock[] | null;
  plantCareTips: PlantInfoBlock[] | null;
}
