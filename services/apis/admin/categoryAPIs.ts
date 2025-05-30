"use server";
import { handleApiResponse } from "@/utils/APIResponseHandling";
import { getApiInstance } from "@/services/axiosInstance";

const categoryApi = getApiInstance("ADMIN_CATEGORY");

// ✅ Get Categories API
export const getCategories = async () => {
  return await handleApiResponse(categoryApi.get("/category"));
};
