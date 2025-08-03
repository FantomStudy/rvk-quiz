import { useLoaderData } from "@tanstack/react-router";

import { useCurrentStep } from "@/store";

export const useCurrentQuestion = () => {
  const session = useLoaderData({ from: "/_testLayout" });
  const currentStep = useCurrentStep();

  return session.questions[currentStep];
};
