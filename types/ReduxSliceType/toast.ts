export type ModalType = "success" | "error" | "info" | "warning" | "";

export type ModalPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center";

export interface ToastState {
  show: boolean;
  type: ModalType;
  message: string;
  position?: ModalPosition;
  duration?: number;
}
