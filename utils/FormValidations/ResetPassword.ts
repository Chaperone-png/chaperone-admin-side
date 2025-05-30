export const validateResetPasswordForm = (formData: { 
    newPassword: string; 
    confirmPassword: string; 
  }) => {
    let errors: Record<string, string> = {};
  
    if (!formData.newPassword.trim()) {
      errors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }
  
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    return errors;
  };
  