import { create } from "zustand";
import { persist } from "zustand/middleware";

import type {AnswersSlice} from "./slices/answersSlice";
import type {ResultSlice} from "./slices/resultSlice";
import type {SessionSlice} from "./slices/sessionSlice";

import {  createAnswersSlice } from "./slices/answersSlice";
import { createResultSlice  } from "./slices/resultSlice";
import { createSessionSlice  } from "./slices/sessionSlice";

type TestState = AnswersSlice & ResultSlice & SessionSlice;

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
