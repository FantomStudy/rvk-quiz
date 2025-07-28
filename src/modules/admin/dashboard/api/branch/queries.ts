import { queryOptions, useQuery } from "@tanstack/react-query";

import type { Branch } from "./types";

import { fetchBranchList } from "./api";

export const branchListQuery = queryOptions<Branch[]>({
  queryKey: ["branch"],
  queryFn: fetchBranchList,
});

export const useBranchList = () => useQuery(branchListQuery);
