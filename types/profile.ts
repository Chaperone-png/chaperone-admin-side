import { AddressFormData } from "./address";

export interface ProfileLeftPanelProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

export interface ProfileImageUploadProps {
  onImageSelect: (url: string) => void;
  selectedImage: string | null;
}

export interface UserInfoProps {
  name: string;
  badgeLevel: "Sprout Starter" | "Budding Enthusiast" | "Plant Prodigy";
}

export interface NavigationListProps {
  currentSection: string;
  onSectionClick: (section: string) => void;
}

export interface ProfileRightPanelProps {
  currentSection: string;
}

export interface DateOfBirthPickerProps {
  dob: string;
  setDob: (dob: string) => void;
}

export interface EmailVerificationProps {
  emailVerified: boolean;
  email: string;
  error: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleEmailVerify: () => void;
}

export interface AddressCardProps {
  address: AddressFormData;
  index: number;
  onEdit: () => void;
  onDelete: () => void;
}

export interface AddressListProps {
  addresses: any[];
  onEdit: (index: number | undefined) => void;
  onDelete: (index: number | undefined) => void;
}

export interface AddressModalProps {
  formData: AddressFormData;
  isEditMode: boolean;
  onCancel: () => void;
  onSubmit: (form: AddressFormData) => void;
  user_id: number | null;
}

export interface OrderData {
  id: string;
  date: string;
  status: string;
  deliveryTime: string;
  images: string[];
  bg: string;
}

export interface SelectiveOrderProps {
  orderInfo: any;
}

export interface OrderImageGalleryProps {
  images: any;
  visibleCount: number;
  onShowMore: () => void;
}

export interface OrderCardProps {
  order: OrderData;
  visibleImages: number;
  onShowMoreImages: (orderId: string) => void;
  onViewDetails: (orderId: string | null) => void;
  isDetailedView: boolean;
}

export interface ProfileBooking {
  id: number;
  status: string;
  date: string;
  bookingId: string;
  bookedOn: string;
  package: string;
  location: string;
  image: any;
  name: string;
  statusClass: string;
  bg: string;
}

export interface BookingCardProps {
  booking: ProfileBooking;
}
