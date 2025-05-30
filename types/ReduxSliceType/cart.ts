import { Container } from "../ProductsType/PlantType";
import { Color } from "../ProductsType/PotPlanterType";

export interface CartItem {
  id: number;
  nursery_id: number;
  product_id: number;
  product_name: string;
  description: string;
  category: string;
  status: string;
  stock: number;
  quantity: number;
  original_price: number;
  final_display_price: number;
  offer_price: number;
  size: string;
  weight: string;
  colorInfo?: Color;
  containerInfo?: Container;
  images: string[];
  tags: string[];
  discount: { percentage: number; valid_till: string };
  shipping_details: {
    estimated_delivery: string;
    return_policy: string;
  };
  productType: string;
  rating: {
    average_rating: number;
    total_reviews: number;
  };
  faqs: { question: string; answer: string }[];
  frequently_bought_together: number[];
  addedAt: string;
}

export interface Coupon {
  code: string;
  discount: {
    isPercentange: boolean;
    value: number;
  };
  couponImage: string;
  expiresAt: string;
}
