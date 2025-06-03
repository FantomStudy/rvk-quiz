import { queryOptions } from "@tanstack/react-query";

import { fetchNominationById } from "@entities/nomination/api/nominationApi";

import { nominationKeys } from "../queryKeys";

export const nominationByIdQueryOptions = (id: number) =>
  queryOptions({
    queryKey: nominationKeys.detail(id),
    queryFn: () => fetchNominationById(id),
  });
