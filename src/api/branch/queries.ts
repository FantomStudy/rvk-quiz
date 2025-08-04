import { queryOptions } from "@tanstack/react-query";

import type { Branch } from "@/types/branch";

import { fetchBranchList } from "./api";

export const branchListQuery = queryOptions<Branch[]>({
  queryKey: ["branch"],
  queryFn: fetchBranchList,
});
