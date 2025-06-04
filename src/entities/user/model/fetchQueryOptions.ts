import { queryOptions } from "@tanstack/react-query";

import { fetchAllUsers, fetchUserById } from "@entities/user/api/userApi";

import { userKeys } from "./queryKeys";

export const allUsersQueryOptions = () =>
  queryOptions({
    queryKey: userKeys.all,
    queryFn: fetchAllUsers,
  });

export const userByIdQueryOption = (id: number) =>
  queryOptions({
    queryKey: userKeys.detail(id),
    queryFn: () => fetchUserById(id),
  });
