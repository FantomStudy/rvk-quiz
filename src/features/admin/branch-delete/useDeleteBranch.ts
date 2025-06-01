import { useMutation } from "@tanstack/react-query";

import { deleteBranch } from "@entities/branch/api/controlBranches";

export const useDeleteBranch = () =>
  useMutation({
    mutationFn: deleteBranchAdapter,
    onSuccess: () => {},
  });

const deleteBranchAdapter = async (id: string) => {
  const data = await deleteBranch(id);

  return data;
};
