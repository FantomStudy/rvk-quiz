import { queryOptions } from "@tanstack/react-query";

import { fetchAllBranches, fetchBranchById } from "../api/branchApi";
import { branchKeys } from "./queryKeys";

export const allBranchesQueryOptions = () =>
  queryOptions({
    queryKey: branchKeys.all,
    queryFn: fetchAllBranches,
  });

export const branchByIdQueryOptions = (id: number) =>
  queryOptions({
    queryKey: branchKeys.detail(id),
    queryFn: () => fetchBranchById(id),
  });
