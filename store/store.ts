import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./slices/toastSlice";
import loaderReducer from "./slices/loaderSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import categoryReducer from "./slices/categorySlice";
import searchmodalReducer from "./slices/searchModalSlice";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    loader: loaderReducer,
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    searchmodal: searchmodalReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
