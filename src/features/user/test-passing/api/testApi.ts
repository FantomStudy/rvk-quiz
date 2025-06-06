import api from "@shared/api";

import type {
  StartTestForm,
  StartTestResponse,
  TestAnswer,
} from "../model/test";

export const startTest = async (form: StartTestForm) => {
  const response = await api.post<StartTestResponse>("/tests/start", form);
  return response.data;
};

export const finishTest = async (userId: number, answers: TestAnswer[]) => {
  const response = await api.post(`/tests/${userId}/finish`, answers);
  return response.data;
};
