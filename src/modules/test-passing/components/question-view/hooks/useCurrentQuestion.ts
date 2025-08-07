import { useLoaderData } from "@tanstack/react-router";

import { useCurrentStep } from "@/store";

export const useCurrentQuestion = () => {
  const session = useLoaderData({ from: "/(test)/test" });
  const currentStep = useCurrentStep();

  return session.questions[currentStep];
};
