export interface AddressFormData {
  id?: number;
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

export interface DefaultAddressView {
  name: "";
  phone: "";
  email: "";
  address: "";
  postal_code: "";
  city: "";
  state: "";
  country: "";
  landmark: "";
  alternate_phone: "";
  address_type: "Home";
  is_default: false;
}

export interface AddressCardProps {
  address: AddressFormData;
  onEdit: () => void;
  handleAddressDelete: (id: number | undefined) => void;
}

export interface AddressFormProps {
  formData: AddressFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditMode: boolean;
  formErrors?: Partial<Record<keyof AddressFormData, string>>; // optional
}
