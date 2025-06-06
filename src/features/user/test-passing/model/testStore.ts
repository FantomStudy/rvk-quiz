import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Nomination } from "@entities/nomination";
import type { User } from "@entities/user";

import type {
  ResultResponse,
  StartTestResponse,
  TestAnswer,
  TestQuestion,
} from "./test";

interface TestState {
  user: User | null;
  nomination: Nomination | null;
  questions: TestQuestion[];
  answers: TestAnswer[];
  currentStep: number;
  result: ResultResponse["result"] | null;
  initializeTest: (payload: StartTestResponse) => void;
  answerQuestion: (answer: TestAnswer) => void;
  getAnswerForQuestion: (questionId: number) => TestAnswer | undefined;
  setResult: (result: ResultResponse["result"]) => void;
  resetTest: () => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useTestStore = create<TestState>()(
  persist(
    (set, get) => ({
      user: null,
      nomination: null,

      questions: [],
      answers: [],
      currentStep: 0,

      result: null,

      initializeTest: ({ user, nomination, questions }) =>
        set({ user, nomination, questions, currentStep: 0, answers: [] }),

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

      getAnswerForQuestion: (questionId: number) =>
        get().answers.find((a) => a.questionId === questionId),

      setResult: (result) => set({ result }),

      nextStep: () => {
        set((state) => ({
          currentStep: state.currentStep + 1,
        }));
      },

      prevStep: () => {
        set((state) => ({
          currentStep: state.currentStep - 1,
        }));
      },

      resetTest: () =>
        set({
          user: null,
          nomination: null,
          questions: [],
          answers: [],
          currentStep: 0,
        }),
    }),
    { name: "test-store" },
  ),
);

export const useInitializeTest = () =>
  useTestStore((state) => state.initializeTest);

export const useResult = () => useTestStore((state) => state.result);
