export const handleAuthError = (error: any): string => {
  if (!error.status) {
    return "Network e`rror. Please check your internet connection.";
  }

  const { status, data } = error;

  if (data?.message) {
    return data.message;
  }
  switch (status) {
    case 400:
      return data.message || "Invalid request. Please check your inputs.";
    case 401:
      return "Unauthorized access. Please check your credentials.";
    case 403:
      return "Access denied. You do not have permission.";
    case 404:
      return "User not found. Please sign up.";
    case 500:
      return "Internal server error. Please try again later.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
};
