import { ValidationErrors } from "@/hooks/useMultiStepForm";

interface OptionType{
    id: number;
    label: string;
    value: string;
}

export interface PlantNurserySection {
  selectedPlant: OptionType | null;
  selectedNurseries: OptionType[];
}

interface PotAndPricing {
  contactName: string;
  contactEmail: string;
}

export interface MultiStepFormData {
  step1: PlantNurserySection;
  step2: PotAndPricing;
}

// Define validators for each step
export const plantValidator = {
  "step1": (data: PlantNurserySection) => {
    const errs: ValidationErrors<PlantNurserySection> = {};
    if (!data.selectedPlant) errs.selectedPlant = "Please select a plant";
    if (!data.selectedNurseries.length) errs.selectedNurseries = "Select at least one nursery";
    return errs;
  },
  "step2": (data: PotAndPricing) => {
    const errs: ValidationErrors<PotAndPricing> = {};
    if (!data.contactName) errs.contactName = "Name is required";
    if (!data.contactEmail || !data.contactEmail.includes("@"))
      errs.contactEmail = "Valid email required";
    return errs;
  },
};

// Initial form data

export const plantInitialData: MultiStepFormData = {
  "step1": {
    selectedPlant: null,
    selectedNurseries: [],
  },
  "step2": {
    contactName: "",
    contactEmail: "",
  },
};