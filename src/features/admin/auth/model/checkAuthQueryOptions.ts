import { queryOptions } from "@tanstack/react-query";

import { checkAuth } from "../api/auth";

const adminAuthQueryKey = ["admin-auth"];

export const checkAuthQueryOptions = () =>
  queryOptions({
    queryKey: adminAuthQueryKey,
    queryFn: checkAuth,
    retry: false,
  });
