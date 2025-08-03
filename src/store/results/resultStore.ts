import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { FinishTestResponse } from "@/types";

interface ResultsState {
  result: FinishTestResponse["result"] | null;

  resetResult: () => void;
  setResult: (result: FinishTestResponse["result"]) => void;
}

export const useResultsStore = create<ResultsState>()(
  persist(
    (set) => ({
      result: null,

      setResult: (result) => set({ result }),

      resetResult: () => set({ result: null }),
    }),
    {
      name: "results-store",
    }
  )
);
