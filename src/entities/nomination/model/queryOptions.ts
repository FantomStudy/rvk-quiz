import { queryOptions } from "@tanstack/react-query";

import { fetchNomination, fetchNominationList } from "../api/nominationApi";
import { nominationKeys } from "./queryKeys";

export const nominationListQuery = () =>
  queryOptions({
    queryKey: nominationKeys.list,
    queryFn: fetchNominationList,
  });

export const nominationQuery = (id: number) =>
  queryOptions({
    queryKey: nominationKeys.byId(id),
    queryFn: () => fetchNomination(id),
  });
