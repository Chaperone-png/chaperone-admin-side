export const validateLoginForm = (formData: {
  mobileNumber: string;
  password: string;
}) => {
  let errors: Record<string, string> = {};

  if (!formData.mobileNumber.trim()) {
    errors.mobileNumber = "Mobile number or email is required";
  } else if (
    !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$|^\d{10}$/.test(
      formData.mobileNumber
    )
  ) {
    errors.mobileNumber = "Enter a valid email or 10-digit phone number";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};
