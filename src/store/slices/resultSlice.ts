import type { StateCreator } from "zustand";

import type { Nomination } from "@/types/nomination";
import type { User } from "@/types/user";

export interface ResultResponse {
  result: {
    id: number;
    user: User;
    nomination: Nomination;
    answers: unknown[];
    duration: string;
    score: number;
    total: number;
    percentage: number;
  };
}

export interface ResultSlice {
  result: ResultResponse["result"] | null;

  setResult: (result: ResultResponse["result"]) => void;
}

export const createResultSlice: StateCreator<ResultSlice> = (set) => ({
  result: null,

  setResult: (result) => set({ result }),
});
