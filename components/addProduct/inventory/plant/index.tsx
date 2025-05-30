'use client';
import { MultiStepForm } from "../../multiStepForm";
import { plantAddFormSteps } from "./stepsConfig";
import { plantInitialData, plantValidator } from "./StepTypes";

const AddInventoryPlant = () => {
  const finalSubmitHandler = () => {};
  
  return (
    <div className="w-[96%] h-[90%]">
      <MultiStepForm
        steps={plantAddFormSteps}
        onComplete={finalSubmitHandler}
        initialData={plantInitialData}
        validators={plantValidator}
      />
    </div>
  );
};

export default AddInventoryPlant;
