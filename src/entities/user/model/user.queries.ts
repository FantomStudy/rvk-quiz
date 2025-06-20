import { queryOptions } from "@tanstack/react-query";

import { fetchUser, fetchUserList } from "@entities/user/api/user.api";

import { userKeys } from "./user.keys";

export const userListQuery = () =>
  queryOptions({
    queryKey: userKeys.list,
    queryFn: fetchUserList,
  });

export const userQuery = (id: number) =>
  queryOptions({
    queryKey: userKeys.byId(id),
    queryFn: () => fetchUser(id),
  });
