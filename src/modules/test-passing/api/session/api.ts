import type { FinishTestResponse, TestAnswer } from "@/types/test";

import { api } from "@/shared/config";

import type { SessionData } from "../../types";

export const fetchSessionData = async () =>
  api.get<SessionData>("/tests/session").then((r) => r.data);

export const finishTest = async (answers: TestAnswer[]) =>
  api
    .post<FinishTestResponse>(`/tests/finish`, { answers })
    .then((r) => r.data.result);
