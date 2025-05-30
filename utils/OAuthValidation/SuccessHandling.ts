export const getOAuthSuccessMessage = (code: string) =>
    ({
      OAuthSignin: "OAuth sign-in successful!",
      OAuthCallback: "OAuth callback completed successfully.",
      OAuthCreateAccount: "Account created successfully.",
      auth_success: "Authentication successful.",
      signup_success: "Signup successful! Welcome aboard.",
      login_success: "Login successful!",
    }[code] || "Operation completed successfully.");
  