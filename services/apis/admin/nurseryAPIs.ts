"use server";

import { getApiInstance } from "@/services/axiosInstance";
import { handleApiResponse } from "@/utils/APIResponseHandling";

const nurseriesApi = getApiInstance("ADMIN_NURSERIES");

export const allNurseriesForInventory = async () => {
  return await handleApiResponse(
    nurseriesApi.get(`/inventory`)
  );
};
