"use server";
import { handleApiResponse } from "@/utils/APIResponseHandling";
import { getApiInstance } from "@/services/axiosInstance";
import {
  ProfileImageProps,
  UpdateUserProfileProps,
  UserAddressProps,
} from "@/types/User/api";
import { headers } from "next/headers";

const userApi = getApiInstance("USERS");

// ✅ Update User Profile API
export const updateUserProfile = async (payload: UpdateUserProfileProps) => {
  return await handleApiResponse(
    userApi.post(`/user/update-profile`, payload.updatePayload, {
      headers: {
        Authorization: payload.token,
      },
    })
  );
};

// ✅ Update User Profile Photo API
export const updateUserProfileImage = async (payload: ProfileImageProps) => {
  return await handleApiResponse(
    userApi.post(`/user/upload-image`, payload.formData, {
      headers: {
        Authorization: payload.token,
        "Content-Type": "multipart/form-data",
      },
    })
  );
};
