interface QuestionBase {
  question: string;
  nominationId: number;
  photoName: string | null;
}

export interface Question extends QuestionBase {
  id: number;
}

export type CreateQuestion = QuestionBase;
