"use server";

import { getApiInstance } from "@/services/axiosInstance";
import { Plant } from "@/types/MasterData";
import { allPlantsPayload, EditPlantPayload } from "@/types/MasterData/api";
import { handleApiResponse } from "@/utils/APIResponseHandling";

const plantMasterApi = getApiInstance("ADMIN_PLANT_MASTER");

export const allPlants = async (payload: allPlantsPayload) => {
  return await handleApiResponse(
    plantMasterApi.get(`/plants`, {
      params: {
        itemsPerPage: Number(payload.itemsPerPage),
        page: Number(payload.page),
        searchText: payload.searchText,
      },
    })
  );
};

export const allPlantsForInventory = async () => {
  return await handleApiResponse(
    plantMasterApi.get(`/plants/inventory`)
  );
};

export const addPlant = async (payload: Partial<Plant>) => {
  return await handleApiResponse(plantMasterApi.post(`/plant`, payload));
};

export const editPlant = async (payload: EditPlantPayload) => {
  return await handleApiResponse(
    plantMasterApi.put(`/plants/${payload.plant_id}`, payload.payload)
  );
};

export const deletePlant = async (plant_id: number) => {
  return await handleApiResponse(plantMasterApi.delete(`/plants/${plant_id}`));
};
