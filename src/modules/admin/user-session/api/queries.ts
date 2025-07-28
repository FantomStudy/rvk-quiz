import { queryOptions } from "@tanstack/react-query";

import type { TestResultParams } from "../types";

import { fetchTestResult } from "./api";

export const testResultQuery = (params: TestResultParams) =>
  queryOptions({
    queryKey: ["test-result", params],
    queryFn: () => fetchTestResult(params),
  });
