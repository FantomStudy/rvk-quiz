import { useQuery } from "@tanstack/react-query";

import type { DashboardFilters } from "../types";

import { fetchBranchStats, fetchDashboardData } from "./api";

export const useDashboardData = (filters?: DashboardFilters) =>
  useQuery({
    queryKey: ["dashboard", JSON.stringify(filters)],
    queryFn: () => fetchDashboardData(filters),
  });

export const useBranchStats = (nominationId?: string) =>
  useQuery({
    queryKey: ["branch-stats", nominationId],
    queryFn: () => fetchBranchStats(nominationId),
  });
