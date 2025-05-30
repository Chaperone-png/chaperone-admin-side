import { LoginPayloadType, RegisterPayloadType } from "@/types/Auth/apis";

export const getAuthPayload = (
  eventType: "login" | "signup",
  user: any
): LoginPayloadType | RegisterPayloadType => {
  if (eventType === "signup") {
    return {
      name: user.name || "",
      email: user.email || "",
      phone: "",
      password: "",
      gender: "",
      date_of_birth: "",
      social_provider: "google",
      social_id: user.id || "",
      referral_code: "",
    } as RegisterPayloadType;
  }

  return {
    phone: "",
    email: user.email || "",
    password: "",
  } as LoginPayloadType;
};
