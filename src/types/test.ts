import type { Nomination } from "./nomination";
import type { User } from "./user";

export interface InitTest {
  nomination: Nomination;
  questions: TestQuestion[];
  user: User;
  time: {
    finishedAt: string;
  };
}

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
