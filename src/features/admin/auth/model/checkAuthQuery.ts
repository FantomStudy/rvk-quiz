import { queryOptions } from "@tanstack/react-query";

import { checkAuth } from "../api/auth";

export const checkAuthQuery = () =>
  queryOptions({
    queryKey: ["admin-auth"],
    queryFn: checkAuth,
    retry: false,
  });
