import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { deleteUser, userKeys } from "@entities/user";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteUserAdapter,
    onSuccess: async (_, id) => {
      console.log("Пользователь удален!");
      queryClient.removeQueries({ queryKey: userKeys.byId(id) });
      await queryClient.refetchQueries({ queryKey: userKeys.list });
      navigate({ to: "/admin/users" });
    },
  });
};

const deleteUserAdapter = async (id: number) => {
  const data = await deleteUser(id);
  return data;
};
