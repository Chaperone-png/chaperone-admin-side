import { Product } from "./ProductsType/ProductType";

export interface SearchPageProps {
  query: string | null;
}

export interface TrendingProductsProps {
  trendingProducts: Product[];
  redirectToUrl: (url: string) => void;
}

export interface TrendingSearchesProps {
  trendingSearches: string[];
  redirectToUrl: (url: string) => void;
}

export interface SearchButtonProps {
  handleSearch: () => void;
}

export interface SearchInputProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

export interface VoiceSearchButtonProps {
  setSearchText: (value: string) => void;
}
