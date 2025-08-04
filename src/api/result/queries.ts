import { useQuery } from "@tanstack/react-query";

import { fetchResultTable } from "./api";

export const useResultTable = (userId: number, nominationId: number) =>
  useQuery({
    queryKey: ["result-table", userId, nominationId],
    queryFn: () => fetchResultTable(userId, nominationId),
    enabled: !!userId && !!nominationId,
  });
