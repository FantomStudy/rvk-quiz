import { useQuery } from "@tanstack/react-query";

import { fetchBranchList } from "./api";

export const useBranchList = () =>
  useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranchList,
  });
