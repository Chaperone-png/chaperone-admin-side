import { Plant } from "../ProductsType/PlantType";
import { Product } from "../ProductsType/ProductType";
import { UserState } from "../ReduxSliceType/user";

export interface BadGatewayModalProps {
  initialDown: boolean;
}
export interface NavbarProps {
  openModal: () => void;
  setMobileMenuOpen: (value: boolean) => void;
}

export interface NavLinkProps {
  label: string;
  path: string;
  className: string;
}

export interface ProfileMenuProps {
  user: UserState;
}

export interface SidebarMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

export interface ServiceCardComponentProps {
  title: string;
  description: string;
  image: any;
}

export interface LushCardProps {
  category: {
    categoryTitle: string;
    categoryBgColor: string;
    categoryImage: string;
    redirectionUrl: string;
  };
  index: number;
}

export interface LushCollectionCategoryProps {
  id: number;
  categoryTitle: string;
  categoryBgColor: string;
  categoryImage: string;
  redirectionUrl: string;
}

export interface dealOfTheDayPlantCardComponentProp {
  Plant: Plant;
}

export interface userReview {
  icon: any;
  text: string;
  Name: string;
  Location: string;
}
export interface UserTestimonialProps {
  reviewObject: userReview;
}

export interface HomePageProductsProps {
  products: Product[];
}
