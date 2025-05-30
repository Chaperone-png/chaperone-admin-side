export const validateLoginViaOTPForm = (formData: {
  mobile: string;
  otp?: string;
  step: number;
}) => {
  const errors: Record<string, string> = {};

  if (!formData.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^\d{10}$/.test(formData.mobile)) {
    errors.mobile = "Enter a valid 10-digit mobile number";
  }

  if (formData.step === 2 && (!formData.otp || formData.otp.length < 4)) {
    errors.otp = "Enter a valid 7-digit OTP";
  }

  return errors;
};
