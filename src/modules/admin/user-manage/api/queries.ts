import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import type { UpdateUserMutation } from "../types";

import { fetchUserList, updateUser } from "./api";

export const userListQuery = queryOptions({
  queryKey: ["user"],
  queryFn: fetchUserList,
});

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserMutation) => updateUser(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
};
