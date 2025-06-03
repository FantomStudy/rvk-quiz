import { queryOptions } from "@tanstack/react-query";

import { fetchAllBranches } from "@entities/branch/api/branchApi";
import { branchKeys } from "@entities/branch/model/queryKeys";

export const allBranchesQueryOptions = () =>
  queryOptions({
    queryKey: branchKeys.all,
    queryFn: fetchAllBranches,
  });
