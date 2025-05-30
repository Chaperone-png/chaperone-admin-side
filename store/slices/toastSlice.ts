import { ModalPosition, ModalType, ToastState } from "@/types/ReduxSliceType/toast";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ToastState = {
  show: false,
  type: "",
  message: "",
  position: "top-right",
  duration: 5000,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (
      state,
      action: PayloadAction<{
        type?: ModalType;
        message?: string;
        position?: ModalPosition;
        duration?: number;
      }>
    ) => {
      state.show = true;
      state.type = action.payload.type || "success";
      state.message = action.payload.message || "....";
      state.position = action.payload.position || "top-right";
      state.duration = action.payload.duration ?? 5000;
    },
    hideToast: (state) => {
      state.show = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
