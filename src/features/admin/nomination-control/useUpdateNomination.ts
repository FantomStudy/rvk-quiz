import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { updateNomination } from "@entities/nomination/api/nomination.api";
import type { CreateNomination } from "@entities/nomination/model/nominaition";
import { nominationKeys } from "@entities/nomination/model/nomination.keys";

export const useUpdateNomination = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateNominationAdapter,
    onSuccess: async () => {
      console.log("Номинация сохранена!");
      await queryClient.refetchQueries({ queryKey: nominationKeys.list });
      navigate({ to: "/admin/nominations" });
    },
  });
};

interface updateNominationAdapterArgs {
  id: number;
  nomination: CreateNomination;
}

const updateNominationAdapter = async ({
  id,
  nomination,
}: updateNominationAdapterArgs) => {
  const data = await updateNomination(id, nomination);
  return data;
};
