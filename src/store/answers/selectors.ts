import { useShallow } from "zustand/shallow";

import { useAnswersStore } from "./answersStore";

export const useAnswers = () => useAnswersStore((state) => state.answers);

export const useInitAnswers = () => useAnswersStore((s) => s.initAnswers);

export const useResetSession = () => useAnswersStore((s) => s.resetSession);

export const useUserAnswers = (questionId: number) =>
  useAnswersStore((s) => s.getUserAnswer(questionId));

export const useAnswerQuestion = () => useAnswersStore((s) => s.answerQuestion);

export const useCurrentStep = () => useAnswersStore((s) => s.currentStep);

export const useStepControls = () =>
  useAnswersStore(
    useShallow(({ nextStep, prevStep }) => ({
      nextStep,
      prevStep,
    }))
  );
