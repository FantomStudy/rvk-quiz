import { useQuery } from "@tanstack/react-query";

import type { DashboardFilters } from "../dashboard";
import { fetchDashboardData } from "./api";

export const useDashboardData = (filters: DashboardFilters) =>
  useQuery({
    queryKey: ["dashboard", JSON.stringify(filters)],
    queryFn: () => fetchDashboardData(filters),
  });
