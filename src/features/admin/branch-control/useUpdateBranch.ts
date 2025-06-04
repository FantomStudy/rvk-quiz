import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { type CreateBranch, branchKeys, updateBranch } from "@entities/branch";

export const useUpdateBranch = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBranchAdapter,
    onSuccess: async () => {
      console.log("Филиал сохранен!");
      await queryClient.refetchQueries({ queryKey: branchKeys.all });
      navigate({ to: "/admin/branches" });
    },
  });
};

interface UpdateBranchAdapterArgs {
  id: number;
  branch: CreateBranch;
}

const updateBranchAdapter = async ({ id, branch }: UpdateBranchAdapterArgs) => {
  const data = await updateBranch(id, branch);

  return data;
};
