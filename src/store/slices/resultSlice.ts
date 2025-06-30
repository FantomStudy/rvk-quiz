import type { StateCreator } from "zustand";

import type { ResultResponse } from "@/types/test";

export interface ResultSlice {
  result: ResultResponse["result"] | null;

  setResult: (result: ResultResponse["result"]) => void;
}

export const createResultSlice: StateCreator<ResultSlice> = (set) => ({
  result: null,

  setResult: (result) => set({ result }),
});
