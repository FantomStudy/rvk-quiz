import { queryOptions } from "@tanstack/react-query";

import { fetchAdminTestResult } from "./api";
import type { AdminTestResultParams } from "./types";

export const adminTestResultQuery = (params: AdminTestResultParams) =>
  queryOptions({
    queryKey: ["admin-test-result", params],
    queryFn: () => fetchAdminTestResult(params),
  });
