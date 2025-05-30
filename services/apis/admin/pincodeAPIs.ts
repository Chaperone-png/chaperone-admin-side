"use server";
import { CheckPincodePayload } from "@/types/Admin/api";
import { handleApiResponse } from "@/utils/APIResponseHandling";
import { getApiInstance } from "@/services/axiosInstance";

const pincodeApi = getApiInstance("ADMIN_PINCODE");

// ✅ Check Pincode exists API
export const CheckIfPincodeExists = async (payload: CheckPincodePayload) => {
  return await handleApiResponse(
    pincodeApi.get(`/check-pincode/${payload.pincode}`)
  );
};
