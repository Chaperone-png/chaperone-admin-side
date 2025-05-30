export interface Container {
  type: string;
  additional_price: number;
  image: string;
  gst_percent: string;
  stock: number;
}

export interface AvailableSize {
  size: string;
  weight: string;
  original_price: number;
  final_display_price: number;
  is_offer: boolean;
  offer_price: number;
  gst_percent: string;
  images: string[];
  containers: Container[];
}

export interface LightEfficiency {
  description: string;
  value: string;
}

export interface WaterSchedule {
  description: string;
  value: string;
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

export interface PlantInfoBlock {
  title: string;
  description: string;
}

// export interface PlantBenefits {
//   summary?: string;
//   benefits: PlantInfoBlock[];
// }

// export interface PlantCareTips {
//   summary: string;
//   tips: PlantInfoBlock[];
// }

export interface Plant {
  id: number;
  nursery_id: number;
  product_id: number;
  product_name: string;
  scientific_name: string;
  description: string;
  care_instructions: string;
  category: string;
  status: string;
  sales_count: number;
  sold_quantity: number;
  total_buyers: number;
  available_sizes: AvailableSize[];
  light_efficiency: string;
  water_schedule: string;
  zodiac_sign: string;
  tags: string[];
  discount?: Discount;
  shipping_details?: ShippingDetails;
  productType: string;
  rating?: Rating;
  faqs?: FAQ[];
  frequently_bought_together?: number[];
  wishlist_count?: number;
  plant_benefits: PlantInfoBlock[];
  plant_care_tips: PlantInfoBlock[];
}

export interface ProductListProps {
  dealOfTheDayProducts: Plant[];
}

export interface PlantDetailedProps {
  plant: Plant;
}

export interface SizeSelectorPlantProps {
  availableSizesList: AvailableSize[];
  selectedSize: AvailableSize | null;
  setSelectedSize: (value: AvailableSize | null) => void;
}

export interface PotSelectorPlantProps {
  availableContainersList: Container[];
  containerType: Container | null;
  setContainerType: (value: Container | null) => void;
}
