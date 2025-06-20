import { create } from "zustand";
import { persist } from "zustand/middleware";

import type {
  ResultResponse,
  StartTestResponse,
  TestAnswer,
  TestQuestion,
} from "@features/test-session";

import type { Nomination } from "@entities/nomination/model/nominaition";
import type { User } from "@entities/user";

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
        const state = get();
        const currentQuestion = state.questions[state.currentStep];

        // Автоматически сохраняем ответ для текущего вопроса, если он еще не сохранен
        if (currentQuestion) {
          const existingAnswer = state.answers.find(
            (a) => a.questionId === currentQuestion.id,
          );
          if (!existingAnswer) {
            const answers = [
              ...state.answers,
              { questionId: currentQuestion.id, optionId: null },
            ];
            set({
              currentStep: state.currentStep + 1,
              answers,
            });
            return;
          }
        }

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
