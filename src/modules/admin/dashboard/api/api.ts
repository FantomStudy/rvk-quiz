import api from "@/config/api";

import type { DashboardData, DashboardFilters } from "../dashboard";

export const fetchDashboardData = async (filters: DashboardFilters) => {
  const response = await api.get<DashboardData>("/statistic/user-statistic", {
    params: {
      ...filters,
    },
  });

  return response.data;
};
