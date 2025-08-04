import { useLoaderData } from "@tanstack/react-router";

import { useCurrentStep } from "@/store";

export const useSessionMeta = () => {
  const session = useLoaderData({ from: "/(test)/test" });
  const step = useCurrentStep();
  return {
    step,
    user: session.user,
    nomination: session.nomination,
    finishedAt: session.finishedAt,
    totalQuestions: session.questions.length,
  };
};
