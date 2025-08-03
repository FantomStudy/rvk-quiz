import type { Nomination } from "./nomination";
import type { User } from "./user";

export interface TestQuestion {
  id: number;
  options: TestOption[];
  photoName: string;
  text: string;
}

interface TestOption {
  id: number;
  answer: string;
}

export interface TestAnswer {
  optionId: number | null;
  questionId: number;
}

export interface FinishTestResponse {
  result: {
    id: number;
    user: User;
    nomination: Nomination;
    testAnswers: Array<{
      id: number;
      optionId: number | null;
      questionId: number;
    }>;
    duration: string;
    score: number;
    total: number;
    percentage: number;
  };
}
