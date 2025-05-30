"use server";
import { getApiInstance } from "../axiosInstance";

const publicApi = getApiInstance("PUBLIC");

export const checkBackendHealth = async () => {
  return await publicApi.get("/health-check");
};
