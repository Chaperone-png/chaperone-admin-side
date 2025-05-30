export interface StepConfigType {
  id: number;
  key: string;
  title: string;
  component: React.ComponentType<any>;
}

export interface MaaliBookingProps {
  planId: string;
}

export interface CreateBookingProps {
  planId: string;
  stepsConfig: StepConfigType[];
}

export interface StepContentProps {
  steps: StepConfigType[];
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
  markComplete: (index: number, valid: boolean) => void;
}

export interface StepSidebarProps {
  steps: StepConfigType[];
  activeStep: number;
  completed: { [key: number]: boolean };
  error: { [key: number]: boolean };
  setActiveStep: (value: number) => void;
}

export interface CreateBookingProps {
  planId: string;
}
