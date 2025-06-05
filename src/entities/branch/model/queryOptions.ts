import { queryOptions } from "@tanstack/react-query";

import { fetchBranch, fetchBranchList } from "../api/branchApi";
import { branchKeys } from "./queryKeys";

export const branchListQuery = () =>
  queryOptions({
    queryKey: branchKeys.list,
    queryFn: fetchBranchList,
  });

export const branchQuery = (id: number) =>
  queryOptions({
    queryKey: branchKeys.byId(id),
    queryFn: () => fetchBranch(id),
  });
