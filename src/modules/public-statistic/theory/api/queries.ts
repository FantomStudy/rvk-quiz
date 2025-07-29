import { useQuery } from "@tanstack/react-query";

import { fetchTheoryList } from "./api";

export const useTheoryList = () =>
  useQuery({
    queryKey: ["theoryList"],
    queryFn: fetchTheoryList,
  });
