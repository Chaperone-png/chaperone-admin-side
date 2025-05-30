import { UserState } from "@/types/ReduxSliceType/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: UserState = {
  id: null,
  name: "",
  email: "",
  role: "",
  area_id: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{
        token: string;
        user: UserState;
        rememberMe: boolean;
      }>
    ) => {
      const { user } = action.payload;
      state.id = user.id;
      state.name = user.name;
      state.email = user.email;
      state.role = user.role;
      state.area_id = user.area_id;
    },
    logoutUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  loginUser,
  logoutUser
} = userSlice.actions;

const persistConfig = {
  key: "user",
  storage,
  whitelist: [
    "id",
    "name",
    "email",
    "role",
    "area_id"
  ],
};

export default persistReducer(persistConfig, userSlice.reducer);
