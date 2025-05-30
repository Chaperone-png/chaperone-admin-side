export const validateForgotPasswordForm = (formData: { email: string }) => {
    let errors: Record<string, string> = {};
  
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }
  
    return errors;
  };
  