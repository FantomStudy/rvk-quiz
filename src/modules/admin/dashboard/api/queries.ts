import { useQuery } from "@tanstack/react-query";

import type { DashboardFilters } from "../dashboard";
import { fetchBranchStats, fetchDashboardData } from "./api";

export const useDashboardData = (filters?: DashboardFilters) =>
  useQuery({
    queryKey: ["dashboard", JSON.stringify(filters)],
    queryFn: () => fetchDashboardData(filters),
  });

export const useBranchStats = (nominationId?: string) =>
  useQuery({
    queryKey: ["branch-stats", nominationId ?? "default"],
    queryFn: () => fetchBranchStats(nominationId),
  });
