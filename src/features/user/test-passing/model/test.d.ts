import type { Answer } from "@entities/answer/answer";
import type { Nomination } from "@entities/nomination";
import type { User } from "@entities/user";

export interface StartTestForm {
  number: string;
  nominationId: number;
}

export interface StartTestResponse {
  user: User;
  nomination: Nomination;
  questions: TestQuestion[];
}

export interface TestQuestion {
  id: number;
  text: string;
  photoName: string | null;
  options: TestOption[];
}

export interface TestOption {
  id: number;
  answer: string;
}

export interface TestAnswer {
  questionId: number;
  optionId: number;
}

export interface ResultResponse {
  result: {
    id: number;
    answers: Answer[];
    duration: string;
    nomination: Nomination;
    score: number;
    total: number;
    user: User;
  };
}
