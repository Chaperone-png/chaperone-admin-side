import { Container } from "./ProductsType/PlantType";
import { Color } from "./ProductsType/PotPlanterType";
import { productSize } from "./ProductsType/ProductSize";
import { Product } from "./ProductsType/ProductType";
import { CartItem } from "./ReduxSliceType/cart";

export interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: { url: string; width: number; height: number; alt: string }[];
  };
}

export interface ProductCardProps {
  productName: string;
  productImages: string;
  offerAmount: number;
  price: number;
  originalPrice: number;
  tags: { imgSrc: string; text: string }[];
  colors: string[];
  sizes: string[];
}

export interface ButtonProps {
  content: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconAction?: () => void;
  rightIconAction?: () => void;
  className?: string;
  align?: "space-between" | "space-evenly" | "center";
  disabled?: boolean;
}

export interface CardActionsProps {
  cartItem: CartItem | null;
  productStatus: string;
  currentStock: number | 0;
}

export interface CreateCartItemProps {
  Product: Product;
  selectedSize: productSize;
  finalPrice: number;
  finalValueWithOffer: number;
  currentImages: string[];
  containerType: Container | undefined;
  colorType: Color | undefined;
}

//-----RATING COMPONENT ----------------
export interface RatingProps {
  rating: number | undefined;
  type?: "stars" | "label";
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const sizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

//CUSTOM ---- DATE PICKER -----------
export interface CustomDatePickerProps {
  selectedDate?: Date;
  onSelect: (date: Date) => void;
}

export interface DateGridProps {
  viewDate: Date;
  today: Date;
  currentDate: Date;
  onDateSelect: (day: number) => void;
}

export interface DatePickerHeaderProps {
  viewDate: Date;
  setViewDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface RangeSliderProps {
  updatePriceFilter: (value: [number, number]) => void;
  priceFilter: [number, number];
}
