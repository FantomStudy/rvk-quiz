import type { ResultResponse } from "@/store/slices/resultSlice";
import type { TestAnswer } from "@/types/test";

import { api } from "@/config";

export const fetchQuestionPhoto = async (filename: string) => {
  const response = await api.get(`/question/photo/${filename}`, {
    responseType: "blob",
  });

  return URL.createObjectURL(response.data);
};

export const finishTest = async (userId: number, answers: TestAnswer[]) => {
  const response = await api.post<ResultResponse>(
    `/tests/${userId}/finish`,
    answers
  );

  return response.data;
};
