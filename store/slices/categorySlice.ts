import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getCategories } from "@/services/apis/admin/categoryAPIs";
import {
  Category,
  CategoryState,
  Subcategory,
} from "@/types/ReduxSliceType/categories";
import { RootState } from "../store";

export const fetchCategories = createAsyncThunk<Category[]>(
  "categories/fetchCategories",
  async () => {
    const response = await getCategories();
    return response.data;
  }
);

export const fetchSubcategoriesBySlug = createAsyncThunk<
  Subcategory[],
  string,
  { state: { categories: CategoryState } }
>("categories/fetchSubcategoriesBySlug", async (slug, thunkAPI) => {
  let categories = thunkAPI.getState().categories.categories;

  if (!categories.length) {
    const response = await getCategories();
    categories = response.data;
  }

  const parentCategory = categories.find((category) =>
    category.parent_slug?.includes(slug)
  );

  return parentCategory ? parentCategory.subcategories : [];
});

const initialState: CategoryState = {
  categories: [],
  subcategories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load categories";
      })
      .addCase(fetchSubcategoriesBySlug.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubcategoriesBySlug.fulfilled, (state, action) => {
        state.subcategories = action.payload;
        state.loading = false;
      })
      .addCase(fetchSubcategoriesBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load subcategories";
      });
  },
});

export const selectSubcategoriesBySlug = (slug: string) => (state: RootState) =>
  state.category.categories.filter((category: Category) =>
    category.parent_slug?.includes(slug)
  );

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
