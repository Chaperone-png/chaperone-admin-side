import { ProductListingParams } from "@/hooks/useProductListingParams";
import { Product } from "./ProductsType/ProductType";
import { Subcategory } from "./ReduxSliceType/categories";

export interface SubCategoryListingProps {
  mainCategory: string;
  subCategory: string;
}

export interface CategoryProp {
  iconUrl: any;
  categoryName: string;
  index: number;
  redirectionUrl: string;
}

export interface ProductGridProps {
  productList: Product[];
  hasMore: boolean;
  updateLoadCount: () => void;
  resetLoadCount: () => void;
  dataFetched: boolean;
}

export interface SubCategoryBannerProps {
  subCategoriesList: Subcategory[];
  bannerInfo: {
    name: string;
    bannerUrl: any;
    description: string;
  };
  mainCategory: string;
}

export interface CategoryListProps {
  subCategoriesList: Subcategory[];
  mainCategory: string;
}

export interface CategoryFiltersProps {
  params: ProductListingParams;
  updatePriceFilter: (value: [number, number]) => void;
  updateSortBy: (valueA: -1 | 1, valueB: -1 | 1) => void;
}

export const PRICE_FILTER_MIN_RANGE = 0;
export const PRICE_FILTER_MAX_RANGE = 10000;
