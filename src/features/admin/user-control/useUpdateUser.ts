import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { type CreateUser, updateUser, userKeys } from "@entities/user";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateUserAdapter,
    onSuccess: async () => {
      console.log("Пользователь сохранен!");
      await queryClient.refetchQueries({ queryKey: userKeys.list });
      navigate({ to: "/admin/users" });
    },
  });
};

interface UpdateUserAdapterArgs {
  id: number;
  user: CreateUser;
}

const updateUserAdapter = async ({ id, user }: UpdateUserAdapterArgs) => {
  const data = await updateUser(id, user);
  return data;
};
