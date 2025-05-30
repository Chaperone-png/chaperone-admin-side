"use server";

import { getApiInstance } from "@/services/axiosInstance";
import { AddPlantPaylod, Plant, Pot } from "@/types/MasterData";
import {
  allPlantsPayload,
  EditPlantPayload,
  EditPotPayload,
} from "@/types/MasterData/api";
import { handleApiResponse } from "@/utils/APIResponseHandling";

const potMasterApi = getApiInstance("ADMIN_POT_MASTER");

export const allPots = async (payload: allPlantsPayload) => {
  return await handleApiResponse(
    potMasterApi.get(`/pots`, {
      params: {
        itemsPerPage: Number(payload.itemsPerPage),
        page: Number(payload.page),
        searchText: payload.searchText,
      },
    })
  );
};

export const addPot = async (payload: Partial<Pot>) => {
  return await handleApiResponse(potMasterApi.post(`/pot`, payload));
};

export const editPot = async (payload: EditPotPayload) => {
  return await handleApiResponse(
    potMasterApi.put(`/pots/${payload.pot_id}`, payload.payload)
  );
};

export const deletePot = async (pot_id: number) => {
  return await handleApiResponse(potMasterApi.delete(`/pots/${pot_id}`));
};
