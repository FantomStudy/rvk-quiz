import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { deleteNomination } from "@entities/nomination/api/nominationApi";
import { nominationKeys } from "@entities/nomination/model/queryKeys";

export const useDeleteNomination = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteNominationAdapter,
    onSuccess: async (_, id) => {
      console.log("Номинация удалена");
      queryClient.removeQueries({ queryKey: nominationKeys.detail(id) });
      await queryClient.refetchQueries({ queryKey: nominationKeys.all });
      navigate({ to: "/admin/nominations" });
    },
  });
};

const deleteNominationAdapter = async (id: number) => {
  const data = await deleteNomination(id);

  return data;
};
