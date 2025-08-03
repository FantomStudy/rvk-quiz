import { useCurrentStep } from "@/store";

import { useSessionMeta } from "./useSessionMeta";

export const useProgress = () => {
  const step = useCurrentStep();
  const { totalQuestions } = useSessionMeta();
  return ((step + 1) / totalQuestions) * 100;
};
