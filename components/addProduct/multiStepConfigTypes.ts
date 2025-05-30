import { plantInitialData, plantValidator } from "./inventory/plant/StepTypes";

export type MultiStepInitialData = typeof plantInitialData | {};

export type formValidation = typeof plantValidator | {};

export interface StepComponentProps<T = any> {
  data: T;
  updateField: (fields: Partial<T>) => void;
  errors: Partial<Record<keyof T, string>>;
}

export interface Step<TProps = any> {
  label: string;
  component: React.ComponentType<TProps>;
}

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;
