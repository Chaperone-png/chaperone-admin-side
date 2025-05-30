import { useState } from "react";

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

export function useMultiStepForm<T extends Record<string, any>>(
  initialData: T,
  validators: Partial<{
    [K in keyof T]: (data: T[K]) => ValidationErrors<T[K]>;
  }>
) {
  const stepKeys = Object.keys(initialData) as (keyof T)[];
   
  const [formData, setFormData] = useState<T>(initialData);
  const [errors, setErrors] = useState<
    Partial<{ [K in keyof T]: ValidationErrors<T[K]> }>
  >({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStepKey = stepKeys[currentStepIndex];

  const updateField = <K extends keyof T[typeof currentStepKey]>(
    field: K,
    value: T[typeof currentStepKey][K],
    stepValue: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [stepValue]: {
        ...prev[stepValue],
        [field]: value,
      },
    }));
  };

  const validateStep = (step: keyof T): boolean => {
    const stepData = formData[step];
    const validator = validators[step];
    if (!validator) return true;

    const validationErrors = validator(stepData);
    setErrors((prev) => ({
      ...prev,
      [step]: validationErrors,
    }));

    return Object.keys(validationErrors).length === 0;
  };

  const nextStep = () => {
    const isValid = validateStep(currentStepKey);
    if (!isValid) return false;

    if (currentStepIndex < stepKeys.length - 1) {
      setCurrentStepIndex((i) => i + 1);
      return true;
    }
    return false;
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1);
      return true;
    }
    return false;
  };

  return {
    formData,
    errors,
    currentStepIndex,
    currentStepKey,
    updateField,
    validateStep,
    nextStep,
    prevStep,
  };
}
