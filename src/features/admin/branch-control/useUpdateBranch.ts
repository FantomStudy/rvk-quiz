import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { updateBranch } from "@entities/branch/api/branchApi";
import type { CreateBranch } from "@entities/branch/model/branch";
import { branchKeys } from "@entities/branch/model/queryKeys";

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
