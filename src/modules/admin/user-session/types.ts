export interface TestResultParams {
  nominationId: string;
  userId: string;
}

export type TestResult = Array<{
  questionId: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}>;
