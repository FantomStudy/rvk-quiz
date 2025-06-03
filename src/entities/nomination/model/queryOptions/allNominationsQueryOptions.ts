import { queryOptions } from "@tanstack/react-query";

import { fetchAllNominations } from "@entities/nomination/api/nominationApi";

import { nominationKeys } from "../queryKeys";

export const allNominationsQueryOptions = () =>
  queryOptions({
    queryKey: nominationKeys.all,
    queryFn: fetchAllNominations,
  });
