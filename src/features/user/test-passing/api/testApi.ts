import api from "@shared/api";

import type {
  ResultResponse,
  StartTestForm,
  StartTestResponse,
  TestAnswer,
} from "../model/test";

export const startTest = async (form: StartTestForm) => {
  const response = await api.post<StartTestResponse>("/tests/start", form);
  return response.data;
};

export const finishTest = async (userId: number, answers: TestAnswer[]) => {
  const response = await api.post<ResultResponse>(
    `/tests/${userId}/finish`,
    answers,
  );
  console.log(response.data);

  return response.data;
};

export const fetchQuestionPhoto = async () =>{
  
}