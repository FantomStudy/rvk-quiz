import { useShallow } from "zustand/shallow";

import { useTestStore } from "../TestStore";

export const useSessionData = () =>
  useTestStore(
    useShallow(({ user, nomination, questions, finishedAt }) => ({
      user,
      nomination,
      questions,
      finishedAt,
    })),
  );

export const useCurrentStep = () => useTestStore((s) => s.currentStep);
export const useStepControls = () =>
  useTestStore(
    useShallow(({ prevStep, nextStep }) => ({ prevStep, nextStep })),
  );

export const useTestResult = () => useTestStore((s) => s.result);

export const useAnswerQuestion = () => useTestStore((s) => s.answerQuestion);
export const useEnsureAnswer = () => useTestStore((s) => s.ensureAnswer);
export const useGetUserAnswer = (questionId: number) =>
  useTestStore((s) => s.getUserAnswer(questionId));

export const useSetTestResult = () => useTestStore((s) => s.setResult);
export const useInitializeTest = () =>
  useTestStore((state) => state.initializeTest);
export const useResetTest = () => useTestStore((state) => state.resetTest);
