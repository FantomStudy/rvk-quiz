import type { Nomination } from "./nomination";
import type { User } from "./user";

export interface InitializeTestData {
  user: User;
  nomination: Nomination;
  questions: TestQuestion[];
  time: {
    startedAt: string;
    finishedAt: string;
  };
}

export interface TestQuestion {
  id: number;
  text: string;
  photoName: string;
  options: TestOption[];
}

interface TestOption {
  id: number;
  answer: string;
}

export interface UserAnswer {
  questionId: number;
  optionId: number | null;
}

export interface ResultResponse {
  result: {
    id: number;
    user: User;
    nomination: Nomination;
    answers: Answer[];
    duration: string;
    score: number;
    total: number;
    percentage: number;
  };
}
