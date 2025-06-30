import api from "@/config/api";
import type { InitializeTestData } from "@/types/test";

export interface StartTestPayload {
  number: string;
  nominationId: number;
}

export const startTest = async (form: StartTestPayload) => {
  const response = await api.post<InitializeTestData>("/tests/start", form);
  return response.data;
};
