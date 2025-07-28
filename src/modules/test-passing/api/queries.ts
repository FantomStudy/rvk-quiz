import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import type { TestAnswer } from "@/types/test";

import { useSetTestResult } from "@/store/selectors";

import { fetchQuestionPhoto, finishTest } from "./api";

export interface FinishTestPayload {
  answers: TestAnswer[];
  userId: number;
}

export const useFinishTest = () => {
  const navigate = useNavigate();
  const setResult = useSetTestResult();

  return useMutation({
    mutationFn: async ({ userId, answers }: FinishTestPayload) =>
      await finishTest(userId, answers),

    onSuccess: (data) => {
      console.log("Данные сохранены и результат получен!");
      setResult(data.result);
      navigate({ to: "/complete" });
    },
  });
};

export const useQuestionPhoto = (fileName: string) =>
  useQuery({
    queryKey: ["questionImage", fileName],
    queryFn: () => fetchQuestionPhoto(fileName),
    enabled: !!fileName,
    staleTime: Infinity,
    gcTime: Infinity,
  });
