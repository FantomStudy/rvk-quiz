import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { finishTest, startTest } from "../api/testApi";
import type { StartTestForm, TestAnswer } from "./test";
import { useInitializeTest, useTestStore } from "./testStore";

export const useStartTest = () => {
  const initializeTest = useInitializeTest();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ number, nominationId }: StartTestForm) =>
      startTest({ number, nominationId }),
    onSuccess: (data) => {
      console.log("Тест успешно начат");
      initializeTest(data);
      navigate({ to: "/test", replace: true });
    },
  });
};

interface FinishTestPayload {
  userId: number;
  answers: TestAnswer[];
}

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
