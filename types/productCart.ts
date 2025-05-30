import { CartItem, Coupon } from "./ReduxSliceType/cart";

export type ProductCartTypes = "Cart" | "Payment" | "Confirmation";

export interface ShoppingCartProps {
  setCartStep: (value: ProductCartTypes) => void;
}

export interface PaymentCardProps {
  setCartStep: (value: ProductCartTypes) => void;
}

export interface ConfirmationProps {
  setCartStep: (value: ProductCartTypes) => void;
}

export interface CouponSlideerProps {
  optedACoupon: string;
  setOptedCoupon: (value: string) => void;
}

export interface CouponListProps {
  coupon: Coupon;
  emptyCouponField: () => void;
}

export interface CartFooterProps {
  onProceed: () => void;
  disable: boolean;
}

export interface CartItemListProps {
  cartItems: CartItem[];
  appliedCoupon: Coupon | null;
  isCartEmpty: boolean;
}

export interface CouponSectionProps {
  optedACoupon: string;
  setOptedCoupon: (coupon: string) => void;
}

export interface OrderSummaryProps {
  cartItems: CartItem[];
  appliedCoupon: Coupon | null;
}

export interface PaymentSummaryProps {
  totalPayableAmount: number;
  totalItems: number;
}

export interface PaymentFooterProps {
  onConfirm: () => void;
}

export interface PaymentHeaderProps {
  setCartStep: (step: ProductCartTypes) => void;
}

export interface PaymentMethodSelectionProps {
  selectedPayment: "razorpay" | "cod" | null;
  setSelectedPayment: (method: "razorpay" | "cod") => void;
}

export interface PaymentOptionCardProps {
  image: any;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface PaymentCardProps {
  setCartStep: (value: ProductCartTypes) => void;
}
