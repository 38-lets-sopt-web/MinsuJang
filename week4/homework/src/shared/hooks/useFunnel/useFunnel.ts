import { useCallback, useMemo, useState } from 'react';

type FunnelStep = string;

type UseFunnelOptions<Step extends FunnelStep> = {
  initialStep?: Step;
  onStepChange?: (nextStep: Step, previousStep: Step) => void;
};

export const useFunnel = <const Steps extends readonly [FunnelStep, ...FunnelStep[]]>(
  steps: Steps,
  options: UseFunnelOptions<Steps[number]> = {},
) => {
  type Step = Steps[number];

  const { initialStep = steps[0] as Step, onStepChange } = options;

  if (!steps.includes(initialStep)) {
    throw new Error('initialStep must be included in steps.');
  }

  const [currentStep, setCurrentStep] = useState<Step>(initialStep);
  const currentIndex = steps.indexOf(currentStep);
  const initialStepIndex = steps.indexOf(initialStep);

  const moveToStep = useCallback(
    (nextStep: Step | undefined) => {
      if (!nextStep || nextStep === currentStep) {
        return;
      }

      setCurrentStep(nextStep);
      onStepChange?.(nextStep, currentStep);
    },
    [currentStep, onStepChange],
  );

  return useMemo(
    () => ({
      currentStep,
      currentIndex,
      isFirstStep: currentIndex === 0,
      isLastStep: currentIndex === steps.length - 1,
      goNext: () => {
        moveToStep(steps[currentIndex + 1] as Step | undefined);
      },
      goPrev: () => {
        moveToStep(steps[currentIndex - 1] as Step | undefined);
      },
      goTo: (step: Step) => {
        moveToStep(step);
      },
      reset: () => {
        moveToStep(steps[initialStepIndex] as Step | undefined);
      },
    }),
    [currentIndex, currentStep, initialStepIndex, moveToStep, steps],
  );
};
