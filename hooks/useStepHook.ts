import { useState } from "react";

export type StepConfig = {
  key: string;
  title: string;
  component: React.ComponentType<any>;
};

export type StepData = Record<string, any>;
export type InitialStepDataFormat = Record<string, StepData>;
export type ValidatorsMap = Record<string, (data: StepData) => boolean>;

export function useStepForm(
  stepConfig: StepConfig[],
  initialData: InitialStepDataFormat = {},
  validators: ValidatorsMap = {}
) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [index: number]: boolean }>({});
  const [errors, setErrors] = useState<{ [index: number]: boolean }>({});
  const [formData, setFormData] = useState<InitialStepDataFormat>(() => {
    const defaultData: InitialStepDataFormat = {};
    stepConfig.forEach((step) => {
      defaultData[step.key] = initialData[step.key] || {};
    });
    return defaultData;
  });

  const currentStep = stepConfig[activeStep];
  const currentStepKey = currentStep?.key;

  const updateFormData = (stepKey: string, newData: StepData) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: {
        ...prev[stepKey],
        ...newData,
      },
    }));
  };

  const getStepData = (stepKey: string): StepData => {
    return formData[stepKey] || {};
  };

  const markStepCompleted = (index: number) => {
    setCompleted((prev) => ({ ...prev, [index]: true }));
  };

  const markStepError = (index: number, hasError: boolean) => {
    setErrors((prev) => ({ ...prev, [index]: hasError }));
  };

  const validateForm = (stepKey: string): boolean => {
    const stepIndex = stepConfig.findIndex((step) => step.key === stepKey);
    const validator = validators[stepKey];
    const data = getStepData(stepKey);

    const isValid = validator ? validator(data) : true;
    setErrors((prev) => ({ ...prev, [stepIndex]: !isValid }));
    if (isValid) {
      setCompleted((prev) => ({ ...prev, [stepIndex]: true }));
    }

    return isValid;
  };

  const nextStep = () => {
    if (activeStep < stepConfig.length - 1) {
      const currentKey = stepConfig[activeStep].key;
      const isValid = validateForm(currentKey);
      if (isValid) setActiveStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const goToStep = (index: number) => {
    // Optional: You can run validateForm here if needed
    if (index <= activeStep) setActiveStep(index);
  };

  return {
    steps: stepConfig,
    activeStep,
    currentStep,
    currentStepKey,
    formData,
    updateFormData,
    getStepData,
    completed,
    errors,
    markStepCompleted,
    markStepError,
    validateForm,
    nextStep,
    prevStep,
    setActiveStep: goToStep,
  };
}
