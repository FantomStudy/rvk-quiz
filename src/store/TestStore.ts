import { create } from "zustand";
import { persist } from "zustand/middleware";

import { type AnswersSlice, createAnswersSlice } from "./slices/answersSlice";
import { type ResultSlice, createResultSlice } from "./slices/resultSlice";
import { type SessionSlice, createSessionSlice } from "./slices/sessionSlice";

type TestState = SessionSlice & AnswersSlice & ResultSlice;

export const useTestStore = create<TestState>()(
  persist(
    (...a) => ({
      ...createSessionSlice(...a),
      ...createAnswersSlice(...a),
      ...createResultSlice(...a),
    }),
    {
      name: "test-store",
    },
  ),
);
