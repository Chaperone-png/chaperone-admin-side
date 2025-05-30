import { Plant, Pot } from "@/types/MasterData";

export interface allPlantsPayload{
    itemsPerPage: number;
    page: number;
    searchText: string;
}

export interface EditPlantPayload{
    plant_id: number | undefined;
    payload: Partial<Plant>;
}

export interface allPotsPayload{
    itemsPerPage: number;
    page: number;
    searchText: string;
}

export interface EditPotPayload{
    pot_id: number | undefined;
    payload: Partial<Pot>;
}