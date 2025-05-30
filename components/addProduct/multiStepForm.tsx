"use client";

import React from "react";
import "./MultiStepForm.scss";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import {
  formValidation,
  MultiStepInitialData,
  Step,
} from "./multiStepConfigTypes";

interface MultiStepFormProps {
  steps: Step[];
  onComplete?: () => void;
  initialData: MultiStepInitialData;
  validators: formValidation;
}

export const MultiStepForm = ({
  steps,
  onComplete,
  initialData,
  validators,
}: MultiStepFormProps) => {
  const {
    formData,
    errors,
    currentStepIndex,
    currentStepKey,
    updateField,
    nextStep,
    prevStep,
    validateStep,
  } = useMultiStepForm(initialData, validators);

  if (!steps || steps.length === 0) {
    return <div>No steps available</div>;
  }

  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const CurrentComponent = steps[currentStepIndex]?.component;

  const onChangeHandler = (
    fields: Partial<(typeof formData)[typeof currentStepKey]>
  ) => {
    const stepValue = currentStepKey
    Object.entries(fields).forEach(([field, value]) => {
      updateField(
        field as keyof (typeof formData)[typeof currentStepKey],
        value as (typeof formData)[typeof currentStepKey][keyof (typeof formData)[typeof currentStepKey]],
        stepValue
      );
    });
    handleNext();
  };

  const handleNext = () => {
    const valid = validateStep(currentStepKey);
    console.log({valid})
    if (valid) {
      if (isLastStep) {
        onComplete?.();
      } else {
        nextStep();
      }
    }
  };

  return (
    <div className="MultiStepForm">
      <div className="header">Multi-Step Form</div>

      <div className="stepLabels">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${
              index === currentStepIndex
                ? "stepActive"
                : index < currentStepIndex
                ? "stepCompleted"
                : "stepPending"
            }`}
            style={{ cursor: "default" }}
          >
            {index + 1}) {step.label}
          </div>
        ))}
      </div>

      <div className="content">
        <CurrentComponent
          data={formData[currentStepKey]}
          onChangeHandler={onChangeHandler}
          errors={errors[currentStepKey]}
        />
      </div>

      {/* <div className="footer">
        <button
          className="buttonBack"
          onClick={prevStep}
          disabled={isFirstStep}
        >
          Back
        </button>
        <button className="buttonNext" onClick={handleNext}>
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div> */}
    </div>
  );
};
