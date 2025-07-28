import { api } from "@/config";

import type { TestResult, TestResultParams } from "../types";

export const fetchTestResult = async (params: TestResultParams) =>
  api
    .get<TestResult>(
      `/tests/result-table/${params.userId}/${params.nominationId}`
    )
    .then((r) => r.data);
