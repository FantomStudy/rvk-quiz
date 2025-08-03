import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { TestAnswer, TestQuestion } from "@/types";

export interface AnswersState {
  answers: TestAnswer[];
  currentStep: number;

  answerQuestion: (answer: TestAnswer) => void;
  getUserAnswer: (questionId: number) => TestAnswer | undefined;
  initAnswers: (questions: TestQuestion[]) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetSession: () => void;
}

export const useAnswersStore = create<AnswersState>()(
  persist(
    (set, get) => ({
      answers: [],
      currentStep: 0,

      initAnswers: (questions: TestQuestion[]) => {
        const initialAnswers = questions.map((q) => ({
          questionId: q.id,
          optionId: null,
        }));
        set({ answers: initialAnswers });
      },
      resetSession: () => set({ answers: [], currentStep: 0 }),

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

      nextStep: () =>
        set((state) => ({
          currentStep: state.currentStep + 1,
        })),

      prevStep: () =>
        set((state) => ({
          currentStep: state.currentStep - 1,
        })),
    }),
    { name: "answers-store" }
  )
);
