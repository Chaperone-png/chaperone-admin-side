import { AddressFormData } from "../address";

export interface UpdateUserProfileProps {
  token: string | null;
  updatePayload: {
    name: string;
    email: string;
    phone: string;
    gender: string;
    date_of_birth: string;
    social_provider: string;
    social_id: string;
    referral_code: string;
    referred_by: string;
  };
}

export interface ProfileImageProps {
  formData: FormData;
  token: string | null;
}

export interface UserAddressProps {
  user_id: number | null;
  name: string;
  phone: string;
  email: string;
  postal_code: string;
  city: string;
  state: string;
  country: string;
  address: string;
  landmark?: string;
  address_type: "Home" | "Work" | "Other";
  is_default: boolean;
  alternate_phone?: string;
}

export interface getAllUserAddressesPayloadProps {
  user_id: number | null;
}

export interface UpdateUserAddressPayloadProps {
  updatePayload: AddressFormData;
  id: number | undefined;
}

export interface getAndDeleteAddressPayloadProps {
  id: number | null;
}
