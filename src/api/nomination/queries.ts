import { queryOptions, useQuery } from "@tanstack/react-query";

import type { Nomination } from "@/types/nomination";

import { fetchNominationList } from "./api";

export const nominationListQuery = queryOptions<Nomination[]>({
  queryKey: ["nomination"],
  queryFn: fetchNominationList,
});

export const useNominationList = () => useQuery(nominationListQuery);
