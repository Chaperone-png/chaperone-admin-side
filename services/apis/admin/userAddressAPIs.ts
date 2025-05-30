"use server";
import { handleApiResponse } from "@/utils/APIResponseHandling";
import { getApiInstance } from "@/services/axiosInstance";
import {
  getAllUserAddressesPayloadProps,
  getAndDeleteAddressPayloadProps,
  UpdateUserAddressPayloadProps,
  UserAddressProps,
} from "@/types/User/api";

const userAddressApi = getApiInstance("USERS");

// ✅ Add User Address API
export const addUserAddress = async (payload: UserAddressProps) => {
  return await handleApiResponse(userAddressApi.post(`/address`, payload));
};

// ✅ Update User Address API
export const updateUserAddress = async (
  payload: UpdateUserAddressPayloadProps
) => {
  const addressId = payload.id as number;
  return await handleApiResponse(
    userAddressApi.put(`/address/${addressId}`, payload.updatePayload)
  );
};

// ✅ Get User Addresses API
export const getUserAddresses = async (
  payload: getAllUserAddressesPayloadProps
) => {
  return await handleApiResponse(
    userAddressApi.get(`/address/user/${payload.user_id}`)
  );
};

// ✅ Delete User Addresses API
export const deleteUserAddresses = async (
  payload: getAndDeleteAddressPayloadProps
) => {
  const addressId = payload.id as number;
  return await handleApiResponse(
    userAddressApi.delete(`/address/${addressId}`)
  );
};

// ✅ Get User Addresses API
export const getSpecificUserAddress = async (
  payload: getAndDeleteAddressPayloadProps
) => {
  const addressId = payload.id as number;
  return await handleApiResponse(userAddressApi.get(`/address/${addressId}`));
};
