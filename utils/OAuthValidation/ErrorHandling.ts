export const getOAuthErrorMessage = (code: string) =>
  ({
    OAuthSignin: "OAuth sign-in attempt failed.",
    OAuthCallback: "OAuth callback error. Please try again.",
    OAuthCreateAccount: "Could not create an account. Try again.",
    auth_failed: "Authentication failed. Please try again.",
    signup_missing_details: "Please fill in all required details for signup.",
    signup_auth_failed: "Signup failed due to authentication error.",
    signup_email_not_verified: "Please verify your email before signing up.",
    signup_account_exists: "An account with this email already exists.",
    signup_failed: "Signup process failed. Please try again.",
    signup_service_unavailable: "Signup service is currently unavailable.",
    login_missing_details: "Please provide all required login details.",
    login_auth_failed: "Incorrect email or password. Please try again.",
    login_email_not_verified: "Please verify your email before logging in.",
    login_user_not_found: "User not found. Please sign up first.",
    login_failed: "Login attempt failed. Please try again.",
    login_service_unavailable: "Login service is currently unavailable.",
  }[code] || "An unknown error occurred.");

export const getOAuthErrorCode = (
  status: number,
  type: "login" | "signup"
): string => {
  const errorCodes: Record<"login" | "signup", Record<number, string>> = {
    
    login: {
      400: "login_missing_details",
      401: "login_auth_failed",
      403: "login_email_not_verified",
      404: "login_user_not_found",
      500: "login_failed",
      503: "login_service_unavailable",
    },
    signup: {
      400: "signup_missing_details",
      401: "signup_auth_failed",
      403: "signup_email_not_verified",
      409: "signup_account_exists",
      500: "signup_failed",
      503: "signup_service_unavailable",
    },
  };

  return errorCodes[type][status] || `${type}_unknown_error`;
};
