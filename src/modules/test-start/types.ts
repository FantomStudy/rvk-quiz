import type { TestQuestion } from "@/types";

export interface StartTestRequest {
  nominationId: number;
  number: string;
}

export interface StartTestResponse {
  questions: TestQuestion[];
  sessionId: string;
}
