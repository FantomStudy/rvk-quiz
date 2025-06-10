import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { type CreateUser, createUser, userKeys } from "@entities/user";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createUserAdapter,
    onSuccess: async () => {
      console.log("Пользователь создан!");
      await queryClient.refetchQueries({ queryKey: userKeys.list });
      navigate({ to: "/admin/users" });
    },
  });
};

const createUserAdapter = async (newUser: CreateUser) => {
  const data = await createUser(newUser);
  return data;
};
