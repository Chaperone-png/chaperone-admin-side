import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem, Coupon } from "@/types/ReduxSliceType/cart";
import { hideLoader, showLoader } from "@/store/slices/loaderSlice";
import { showToast } from "@/store/slices/toastSlice";

interface CartState {
  isOpen: boolean;
  userId: string;
  cartItems: CartItem[];
  savedForLater: CartItem[];
  isBuyNowActive: boolean;
  appliedCoupon: Coupon | null;
  currency: string;
  error: string | null;
}

const loadCartFromStorage = (): CartItem[] => {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
};

const initialState: CartState = {
  userId: "",
  cartItems: loadCartFromStorage(),
  savedForLater: [],
  isBuyNowActive: false,
  appliedCoupon: null,
  currency: "INR",
  error: null,
  isOpen: false,
};

const fetchApi = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error("API request failed");
  return response.json();
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId: string, { dispatch, rejectWithValue }) => {
    try {
      dispatch(showLoader());
      const serverCart: CartItem[] = await fetchApi(`/api/cart/${userId}`);
      const mergedCart = [
        ...new Map(
          [...serverCart, ...loadCartFromStorage()].map((item) => [
            item.id,
            item,
          ])
        ).values(),
      ];
      localStorage.setItem("cart", JSON.stringify(mergedCart));
      return mergedCart;
    } catch (error) {
      dispatch(showToast({ type: "error", message: "Failed to fetch cart" }));
      return rejectWithValue(error);
    } finally {
      dispatch(hideLoader());
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (
    { userId, cartItems }: { userId: string; cartItems: CartItem[] },
    { dispatch, rejectWithValue }
  ) => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      await fetchApi(`/api/cart/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, cartItems }),
      });
      dispatch(
        showToast({ type: "success", message: "Cart updated successfully" })
      );
      return cartItems;
    } catch (error) {
      dispatch(showToast({ type: "error", message: "Failed to update cart" }));
      return rejectWithValue(error);
    }
  }
);

export const clearCartOnServer = createAsyncThunk(
  "cart/clearCart",
  async (userId: string, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`/api/cart/clear/${userId}`, { method: "DELETE" });
      localStorage.removeItem("cart");
      dispatch(showToast({ type: "success", message: "Cart cleared" }));
      return [];
    } catch (error) {
      dispatch(showToast({ type: "error", message: "Failed to clear cart" }));
      return rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    openCartDrawer: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    closeCartDrawer: (state) => {
      state.isOpen = false;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      existingItem && existingItem.quantity < existingItem.stock
        ? (existingItem.quantity += action.payload.quantity)
        : state.cartItems.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.isOpen = true;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item && action.payload.quantity <= item.stock)
        item.quantity = action.payload.quantity;
      state.isOpen = true;
    },
    applyCoupon: (state, action: PayloadAction<Coupon>) => {
      state.appliedCoupon = action.payload;
    },
    removeCoupon: (state) => {
      state.appliedCoupon = null;
    },
    buyNow: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = [action.payload];
      state.isBuyNowActive = true;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.isOpen = true;
    },
    resetBuyNow: (state) => {
      state.isBuyNowActive = false;
    },
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.isBuyNowActive = false;
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartItems = action.payload || [];
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(clearCartOnServer.fulfilled, (state) => {
        state.cartItems = [];
      });
  },
});

export const {
  setUserId,
  addToCart,
  removeFromCart,
  updateQuantity,
  applyCoupon,
  removeCoupon,
  buyNow,
  resetBuyNow,
  changeCurrency,
  openCartDrawer,
  closeCartDrawer,
  emptyCart,
} = cartSlice.actions;

export const selectCart = (state: { cart: CartState }) => state.cart.cartItems;
export const selectCoupon = (state: { cart: CartState }) =>
  state.cart.appliedCoupon;
export const selectCurrency = (state: { cart: CartState }) =>
  state.cart.currency;
export const selectIsBuyNowActive = (state: { cart: CartState }) =>
  state.cart.isBuyNowActive;
export const selectUserId = (state: { cart: CartState }) => state.cart.userId;

export const selectProductQuantity = (
  state: { cart: CartState },
  productId: number
) => {
  const item = state.cart.cartItems.find((item) => item.id === productId);
  return item ? item.quantity : 0;
};

export default cartSlice.reducer;
