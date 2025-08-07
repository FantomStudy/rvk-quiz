import { api } from "@/shared/config";

import type {
  BranchStatsResponse,
  DashboardData,
  DashboardFilters,
} from "../types";

export const fetchDashboardData = async (filters?: DashboardFilters) =>
  api
    .get<DashboardData>("/statistic/user-statistic", {
      params: filters,
    })
    .then((r) => r.data);

export const fetchBranchStats = async (nominationId?: string) =>
  api
    .get<BranchStatsResponse>("/statistic/branch-statistic", {
      params: {
        nominationId,
      },
    })
    .then((r) => r.data);
