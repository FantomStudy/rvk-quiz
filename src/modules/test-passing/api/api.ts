import api from "@/config/api";
import type { ResultResponse, UserAnswer } from "@/types/test";

export const fetchQuestionPhoto = async (filename: string) => {
  const response = await api.get(`/question/photo/${filename}`, {
    responseType: "blob",
  });

  return URL.createObjectURL(response.data);
};

export const finishTest = async (userId: number, answers: UserAnswer[]) => {
  const response = await api.post<ResultResponse>(
    `/tests/${userId}/finish`,
    answers,
  );

  return response.data;
};
