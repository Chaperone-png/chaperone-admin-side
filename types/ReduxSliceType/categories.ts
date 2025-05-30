export interface Subcategory {
  id: number;
  parent_id: number;
  name: string;
  slug: string;
  description: string;
  icon_url: string;
  banner_url: string;
  is_active: boolean;
  position: number;
  level: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  parent_id: number;
  parent_name: string;
  parent_slug: string;
  parent_description: string;
  parent_is_active: boolean;
  subcategories: Subcategory[];
}

export interface CategoryState {
  categories: Category[];
  subcategories: Subcategory[];
  loading: boolean;
  error: string | null;
}
