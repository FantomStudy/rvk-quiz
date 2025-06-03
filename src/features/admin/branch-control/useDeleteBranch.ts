import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { deleteBranch } from "@entities/branch/api/branchApi";
import { branchKeys } from "@entities/branch/model/queryKeys";

export const useDeleteBranch = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBranchAdapter,
    onSuccess: async (_, id) => {
      console.log("Филиал удален!");
      queryClient.removeQueries({ queryKey: branchKeys.detail(id) });
      await queryClient.refetchQueries({ queryKey: branchKeys.all });
      navigate({ to: "/admin/branches" });
    },
  });
};

const deleteBranchAdapter = async (id: number) => {
  const data = await deleteBranch(id);

  return data;
};
