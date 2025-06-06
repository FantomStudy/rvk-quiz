interface AnswerBase {
  answer: string;
  correctness: boolean;
  questionId: number;
}

export interface Answer extends AnswerBase {
  id: number;
}

export type CreateAnswer = AnswerBase;
