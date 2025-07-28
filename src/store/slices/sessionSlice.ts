import type { StateCreator } from "zustand";

import type { Nomination } from "@/types/nomination";
import type { InitTest, TestQuestion } from "@/types/test";
import type { User } from "@/types/user";

import type { AnswersSlice } from "./answersSlice";
import type { ResultSlice } from "./resultSlice";

export interface SessionSlice {
  currentStep: number;
  finishedAt: string | null;
  nomination: Nomination | null;
  questions: TestQuestion[];
  user: User | null;

  initializeTest: (payload: InitTest) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetTest: () => void;
}

export const createSessionSlice: StateCreator<
  AnswersSlice & ResultSlice & SessionSlice,
  [],
  [],
  SessionSlice
> = (set) => ({
  user: null,
  nomination: null,
  questions: [],
  currentStep: 0,
  finishedAt: null,

  initializeTest: ({ user, nomination, questions, time }) => {
    set({
      user,
      nomination,
      questions,
      currentStep: 0,
      answers: [],
      result: null,
      finishedAt: time.finishedAt,
    });
  },
  resetTest: () => {
    set({
      user: null,
      nomination: null,
      questions: [],
      currentStep: 0,
      answers: [],
      result: null,
      finishedAt: null,
    });
  },

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
});
