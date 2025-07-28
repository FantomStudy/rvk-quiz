import type { StateCreator } from "zustand";

import type { TestAnswer } from "@/types/test";

import type { SessionSlice } from "./sessionSlice";

export interface AnswersSlice {
  answers: TestAnswer[];

  answerQuestion: (answer: TestAnswer) => void;
  getUserAnswer: (questionId: number) => TestAnswer | undefined;
  ensureAnswer: () => void;
}

export const createAnswersSlice: StateCreator<
  AnswersSlice & SessionSlice,
  [],
  [],
  AnswersSlice
> = (set, get) => ({
  answers: [],

  answerQuestion: ({ questionId, optionId }) => {
    const answers = get().answers;

    let updatedAnswers;
    const existing = answers.findIndex((a) => a.questionId === questionId);

    if (existing !== -1) {
      updatedAnswers = [
        ...answers.slice(0, existing),
        { questionId, optionId },
        ...answers.slice(existing + 1),
      ];
    } else {
      updatedAnswers = [...answers, { questionId, optionId }];
    }

    set({ answers: updatedAnswers });
  },

  getUserAnswer: (questionId: number) =>
    get().answers.find((a) => a.questionId === questionId),

  ensureAnswer: () => {
    const state = get();
    const currentQuestion = state.questions[state.currentStep];

    if (currentQuestion) {
      const existingAnswer = state.answers.find(
        (a) => a.questionId === currentQuestion.id
      );
      if (!existingAnswer) {
        const answers = [
          ...state.answers,
          { questionId: currentQuestion.id, optionId: null },
        ];
        set({
          answers,
        });
      }
    }
  },
});
