import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { createNomination } from "@entities/nomination/api/nominationApi";
import type { CreateNomination } from "@entities/nomination/model/nominaition";
import { nominationKeys } from "@entities/nomination/model/queryKeys";

export const useCreateNomination = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createNominationAdapter,
    onSuccess: async () => {
      console.log("Номинация создана!");
      await queryClient.refetchQueries({ queryKey: nominationKeys.all });
      navigate({ to: "/admin/nominations" });
    },
  });
};

const createNominationAdapter = async (newNomination: CreateNomination) => {
  const data = await createNomination(newNomination);

  return data;
};
