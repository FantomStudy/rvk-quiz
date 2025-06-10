import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import {
  type CreateNomination,
  createNomination,
  nominationKeys,
} from "@entities/nomination";

export const useCreateNomination = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createNominationAdapter,
    onSuccess: async () => {
      console.log("Номинация создана!");
      await queryClient.refetchQueries({ queryKey: nominationKeys.list });
      navigate({ to: "/admin/nominations" });
    },
  });
};

const createNominationAdapter = async (newNomination: CreateNomination) => {
  const data = await createNomination(newNomination);
  return data;
};
