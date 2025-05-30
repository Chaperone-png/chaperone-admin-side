import SelectNurseriesAndPlants from "./SelectNurseriesAndPlants";
import PotAndPricingForm from "./PotAndPricingForm";
import NurseryLinkAndImages from "./NurseryLinkAndImages";

export const plantAddFormSteps = [
  {
    label: "Select Plant & Nursery(s)",
    component: SelectNurseriesAndPlants,
  },
  {
    label: "Pot & Pricing",
    component: PotAndPricingForm,
  },
  {
    label: "Nursery & Images",
    component: NurseryLinkAndImages,
  },
];
