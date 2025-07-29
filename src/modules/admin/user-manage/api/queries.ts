import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import type { SaveUserMutation } from "../types";

import { fetchUserList, updateUser } from "./api";

export const userListQuery = queryOptions({
  queryKey: ["user"],
  queryFn: fetchUserList,
});

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, userData }: SaveUserMutation) =>
      updateUser(userId, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
