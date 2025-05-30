export interface Color {
  title: string;
  image: string;
  stock?: number;
}

export interface PotPlanterAvailableSize {
  size: string;
  weight: string;
  original_price: number;
  final_display_price: number;
  is_offer: boolean;
  offer_price: number;
  gst_percent?: string;
  images: string[];
  colors: Color[];
}

export interface Discount {
  percentage: number;
  valid_till: string;
}

export interface ShippingDetails {
  estimated_delivery: string;
  return_policy: string;
}

export interface UserReview {
  user_id: number;
  username: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Rating {
  average_rating: number;
  total_reviews: number;
  user_reviews: UserReview[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PotPlanter {
  id: number;
  nursery_id: number;
  product_id: number;
  product_name: string;
  description: string;
  category: string;
  status: string;
  sales_count: number;
  sold_quantity: number;
  total_buyers: number;
  available_sizes: PotPlanterAvailableSize[];
  tags: string[];
  discount?: Discount;
  shipping_details?: ShippingDetails;
  rating?: Rating;
  faqs?: FAQ[];
  productType: string;
  frequently_bought_together?: number[];
  wishlist_count?: number;
}

export interface ProductListProps {
  dealOfTheDayProducts: PotPlanter[];
}

export interface PotPlanterDetailedProps {
  potPlanter: PotPlanter;
}

export interface SizeSelectorProps {
  availableSizesList: PotPlanterAvailableSize[];
  selectedSize: PotPlanterAvailableSize | null;
  setSelectedSize: (value: PotPlanterAvailableSize | null) => void;
}

export interface ColorSelectorProps {
  availableColorsList: Color[];
  colorType: Color | null;
  setColorType: (value: Color | null) => void;
}
