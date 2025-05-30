export interface LoginPayloadType {
  email: string;
  phone: string;
  password: string;
}

export interface RegisterPayloadType {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface ForgotPasswordPayloadType {
  email: string;
}

export interface ResetPasswordPayloadType {
  token: string;
  newPassword: string;
}

export interface ResetTokenValidationPayloadType {
  resetToken: string;
}

export interface LoginViaOTPSendPayloadType {
  mobile: string;
  method: "whatsapp" | "sms";
}

export interface LoginViaOTPVerifyPayloadType {
  mobile: string;
  otp: string;
}

export interface GoogleLogInPayloadType {
  token: string;
}

export interface GetUserInfoThroughTokenPayloadType {
  accessToken: string;
}

export interface homePageProductsPayloadType {
  pincode: string;
}

export interface collectionProductsPayloadType {
  pincode: string;
  mainCategory: string;
  priceFilter: number[];
  subCategory: string;
  productNameSortBy: 0 | -1 | 1;
  productPriceSortBy: 0 | -1 | 1;
  itemsPerLoad: number;
  loadCount: number;
  searchedString: string;
  isBestSeller?: boolean;
}

export interface SpecificProductsPayloadType {
  product_id: number;
}

export interface SearchedProductsPayloadType {
  searchedString: string;
}
