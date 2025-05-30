"use server";

import { handleApiResponse } from "@/utils/APIResponseHandling";
import { getApiInstance } from "../axiosInstance";
import { AdminLoginPayload } from "@/types/commonApi";

const adminApi = getApiInstance("ADMIN");

// ✅ User Login API
export const loginUser = async (payload: AdminLoginPayload) => {
  return await handleApiResponse(adminApi.post("/admin/login", payload));
};

