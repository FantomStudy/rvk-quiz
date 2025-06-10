import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { type CreateBranch, branchKeys, createBranch } from "@entities/branch";

export const useCreateBranch = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBranchAdapter,
    onSuccess: async () => {
      console.log("Филиал создан успешно");
      await queryClient.refetchQueries({ queryKey: branchKeys.list });
      navigate({ to: "/admin/branches" });
    },
  });
};

const createBranchAdapter = async (newBranch: CreateBranch) => {
  const data = await createBranch(newBranch);
  return data;
};
