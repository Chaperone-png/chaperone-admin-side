import HomeAddress from "@/public/assets/images/profile/homeAddress.svg";
import OfficeAddress from "@/public/assets/images/profile/officeAddress.svg";

export const getAddressTypeIcon = (address_type: string) => {
  if (address_type.toLowerCase().includes("home")) return HomeAddress;
  if (address_type.toLowerCase().includes("work")) return OfficeAddress;
  return OfficeAddress;
};
