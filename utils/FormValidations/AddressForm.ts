import { AddressFormData } from "@/types/address";

export const validateAddressForm = (formData: AddressFormData) => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.phone?.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  if (!formData.email?.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!formData.postal_code?.trim()) {
    errors.postal_code = "Pincode is required";
  }

  if (!formData.city?.trim()) {
    errors.city = "City is required";
  }

  if (!formData.country?.trim()) {
    errors.country = "Country is required";
  }

  if (!formData.state?.trim()) {
    errors.state = "State is required";
  }

  if (!formData.address?.trim()) {
    errors.address = "Address is required";
  }

  if (!formData.address_type?.trim()) {
    errors.address_type = "Address type is required";
  }
  return errors;
};
