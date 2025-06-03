import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { createBranch } from "@entities/branch/api/branchApi";
import type { CreateBranch } from "@entities/branch/model/branch";
import { branchKeys } from "@entities/branch/model/queryKeys";

export const useCreateBranch = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBranchAdapter,
    onSuccess: async () => {
      console.log("Филиал создан успешно");
      await queryClient.refetchQueries({ queryKey: branchKeys.all });
      navigate({ to: "/admin/branches" });
    },
  });
};

const createBranchAdapter = async (newBranch: CreateBranch) => {
  const data = await createBranch(newBranch);

  return data;
};
