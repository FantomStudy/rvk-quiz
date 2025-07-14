export interface AdminTestResultParams {
  userId: string;
  nominationId: string;
}

export type AdminTestResultResponse = Array<{
  questionId: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}>;
