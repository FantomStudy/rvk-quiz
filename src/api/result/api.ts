import type { TestResult } from "@/types";

import { api } from "@/shared/config";

export const fetchResultTable = async (userId: number, nominationId: number) =>
  api
    .get<TestResult>(`/tests/result-table/${userId}/${nominationId}`)
    .then((r) => r.data);
