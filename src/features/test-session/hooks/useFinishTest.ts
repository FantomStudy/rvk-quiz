import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { useTestStore } from "@features/test-pass/store/testStore";

import { finishTest } from "../api/testSessionApi";
import type { FinishTestPayload } from "../types";

export const useFinishTest = () => {
  const navigate = useNavigate();
  const setResult = useTestStore((state) => state.setResult);

  return useMutation({
    mutationFn: async ({ userId, answers }: FinishTestPayload) =>
      await finishTest(userId, answers),

    onSuccess: (data) => {
      console.log("Данные сохранены и результат получен!");
      setResult(data.result);
      navigate({ to: "/complete", replace: true });
    },
  });
};
