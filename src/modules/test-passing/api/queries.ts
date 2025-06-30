import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { useSetTestResult } from "@/store/selectors";
import type { UserAnswer } from "@/types/test";

import { fetchQuestionPhoto, finishTest } from "./api";

export interface FinishTestPayload {
  userId: number;
  answers: UserAnswer[];
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
