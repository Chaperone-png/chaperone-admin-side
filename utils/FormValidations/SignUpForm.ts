export const validateSignupForm = (formData: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) => {
  let newErrors: Record<string, string> = {};

  if (!formData.name.trim()) {
    newErrors.name = "Full Name is required";
  }

  const isEmailProvided = !!formData.email.trim();
  const isPhoneProvided = !!formData.phone.trim();

  // If neither email nor phone is provided
  if (!isEmailProvided && !isPhoneProvided) {
    newErrors.contact = "Either Email or Phone must be provided";
  } else {
    // Validate email if it's provided
    if (isEmailProvided) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    // Validate phone if it's provided
    if (isPhoneProvided) {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Invalid Indian phone number";
      }
    }
  }

  // Password validation
  if (!formData.password.trim()) {
    newErrors.password = "Password is required";
  } else {
    const password = formData.password;
    let passwordErrors: string[] = [];

    if (password.length < 8) passwordErrors.push("at least 8 characters");
    if (!/[A-Z]/.test(password)) passwordErrors.push("one uppercase letter");
    if (!/[a-z]/.test(password)) passwordErrors.push("one lowercase letter");
    if (!/[0-9]/.test(password)) passwordErrors.push("one number");
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password))
      passwordErrors.push("one special character (!@#$%^&*...)");

    if (passwordErrors.length > 0) {
      newErrors.password = `Password must include: ${passwordErrors.join(
        ", "
      )}`;
    }
  }

  return newErrors;
};
