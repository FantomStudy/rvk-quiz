import api from "@/config/api";

import type { DashboardFilters } from "../dashboard";
import type { BranchStatsResponse, DashboardData } from "./types";

export const fetchDashboardData = async (filters?: DashboardFilters) => {
  const response = await api.get<DashboardData>("/statistic/user-statistic", {
    params: {
      ...filters,
    },
  });

  return response.data;
};

export const fetchBranchStats = async (nominationId?: string) => {
  const response = await api.get<BranchStatsResponse>(
    "/statistic/branch-statistic",
    {
      params: {
        nominationId,
      },
    },
  );

  return response.data;
};
