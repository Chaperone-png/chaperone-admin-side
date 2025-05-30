export type JSONStringifiedArray = string | null;

export interface FeatureItems {
  title: string;
}

export interface FreebieItems {
  item: string;
  quantity: number;
}

export interface MaaliPlan {
  plan_name: string;
  plan_description: string;
  duration_hours: number;
  final_display_price: string;
  gst_percent: string;
  freebies: JSONStringifiedArray;
  features: JSONStringifiedArray;
  plan_type: string;
}

export interface pricingPlanProps {
  planDetails: MaaliPlan;
  slideClass?: string;
}

export interface SwiperSliderComponentProps {
  slides: any[];
  settings: any;
  servicePlans: MaaliPlan[];
  navigationNextElClass: string;
  navigationPrevElClass: string;
}

export interface MaaliBannerProps {
  scrollToPricing: () => void;
}

export interface PricingPlansProps {
  pricingRef: React.RefObject<HTMLDivElement | null>;
  isSubscription: boolean;
  setIsSubscription: (val: boolean) => void;
}

export interface PricingPlanSliderProps {
  servicePlans: MaaliPlan[];
}
