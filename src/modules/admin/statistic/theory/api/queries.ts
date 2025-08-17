import { useQuery } from "@tanstack/react-query";

import { fetchTheoryList } from "./api";

export const useTheoryList = (nominationId: number) =>
  useQuery({
    queryKey: ["theoryList", nominationId],
    queryFn: () => fetchTheoryList(nominationId),
  });
