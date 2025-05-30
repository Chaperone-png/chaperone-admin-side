export enum UserSessionModalIds {
  LOGIN = "loginModal",
  OTP_LOGIN = "GetOtpModal",
  SIGNUP = "signupModal",
  FORGOT_PASSWORD = "forgotPasswordModal",
  RESET_PASSWORD = "resetPasswordModal",
  SIZE_CHART = "sizeChartModal",
}

export interface userModalProps {
  open: boolean;
  closeModal: () => void;
  openModal: (modalType: UserSessionModalIds) => void;
}

export interface ResetPasswordProps {
  token: string;
}

export interface LoginFormData {
  mobileNumber: string;
  password: string;
}

export interface LoginViaOTPFormData {
  mobile: string;
  otp: string;
  step: number;
  method: "whatsapp" | "sms";
}

export interface SignInFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface ResetPasswordData {
  newPassword: string;
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}