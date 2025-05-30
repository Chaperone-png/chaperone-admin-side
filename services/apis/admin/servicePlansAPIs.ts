"use server";
import { handleApiResponse } from "@/utils/APIResponseHandling";
import { getApiInstance } from "@/services/axiosInstance";
import {
  MaaliServicePlanByPincodePayload,
  MaaliServicePlanByPlanTypePayload,
} from "@/types/Admin/api";

const servicePlanApi = getApiInstance("ADMIN_SERVICE_PLAN");

// ✅ Get all Maali Service Plans by plan_type API
export const getAllmaaliServicePlans = async (
  payload: MaaliServicePlanByPlanTypePayload
) => {
  return await handleApiResponse(
    servicePlanApi.get(`/maali-service/plan-type/${payload.plan_type}`)
  );
};

// ✅ Get all Maali Service Plans over pincode API
export const maaliServicePlans = async (
  payload: MaaliServicePlanByPincodePayload
) => {
  return await handleApiResponse(
    servicePlanApi.get(`/maali-service/${payload.pincode}`)
  );
};
