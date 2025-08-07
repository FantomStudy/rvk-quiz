import { useQuery } from "@tanstack/react-query";

import { fetchCommonList } from "./api";

export const useCommonList = () =>
  useQuery({
    queryKey: ["commonList"],
    queryFn: fetchCommonList,
  });
