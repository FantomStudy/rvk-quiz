import { queryOptions } from "@tanstack/react-query";

import { fetchNomination, fetchNominationList } from "../api/nomination.api";
import { nominationKeys } from "./nomination.keys";

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
