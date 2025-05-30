import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./slices/toastSlice";
import loaderReducer from "./slices/loaderSlice";
import userReducer from "./slices/userSlice";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    loader: loaderReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
