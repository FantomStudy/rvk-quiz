import { queryOptions } from "@tanstack/react-query";

import { checkAuth } from "../api/auth";

const adminAuthQueryKey = ["admin-auth"];

export const checkAuthQuery = () =>
  queryOptions({
    queryKey: adminAuthQueryKey,
    queryFn: checkAuth,
    retry: false,
  });
