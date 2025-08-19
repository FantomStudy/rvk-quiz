import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { UpdateUserMutation } from "../types";

import { fetchFullNameList, fetchUserList, updateUser } from "./api";

export const useUserList = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: fetchUserList,
  });

export const useFullnameList = () =>
  useQuery({
    queryKey: ["fullname"],
    queryFn: fetchFullNameList,
  });

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserMutation) => updateUser(data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["user"] });
      console.log("Saved!");
    },
  });
};
