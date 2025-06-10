import type { Answer } from "@entities/answer/answer";

interface QuestionBase {
  question: string;
  nominationId: number;
  photoName: string | null;
}

export interface Question extends QuestionBase {
  id: number;
}

export interface QuestionWithAnswer extends Question {
  answers: Answer;
}

export type CreateQuestion = QuestionBase;
