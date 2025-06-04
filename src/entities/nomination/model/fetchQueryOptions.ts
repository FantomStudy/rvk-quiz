import { queryOptions } from "@tanstack/react-query";

import { fetchAllNominations, fetchNominationById } from "../api/nominationApi";
import { nominationKeys } from "./queryKeys";

export const allNominationsQueryOptions = () =>
  queryOptions({
    queryKey: nominationKeys.all,
    queryFn: fetchAllNominations,
  });

export const nominationByIdQueryOptions = (id: number) =>
  queryOptions({
    queryKey: nominationKeys.detail(id),
    queryFn: () => fetchNominationById(id),
  });
