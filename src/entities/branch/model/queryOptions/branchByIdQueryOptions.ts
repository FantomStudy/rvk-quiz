import { queryOptions } from "@tanstack/react-query";

import { fetchBranchById } from "@entities/branch/api/branchApi";
import { branchKeys } from "@entities/branch/model/queryKeys";

export const branchByIdQueryOptions = (id: number) =>
  queryOptions({
    queryKey: branchKeys.detail(id),
    queryFn: () => fetchBranchById(id),
  });
