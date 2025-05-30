export const initialProfileData = {
  firstName: "",
  lastName: "",
  password: "",
  phone: "",
  email: "",
  socialProvider: "",
  providerId: "",
  referralCode: "",
  referredBy: "",
  gender: "",
  dateOfBirth: "",
};

export const validateProfile = (values: typeof initialProfileData) => {
  const errors: Record<string, string> = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  // if (!values.password || values.password.length < 6)
  //   errors.password = "Password must be at least 6 characters.";
  if (!values.phone.match(/^\d{10}$/))
    errors.phone = "Enter a valid 10-digit phone number.";
  if (!values.socialProvider)
    errors.socialProvider = "Please select a social provider.";
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
};
