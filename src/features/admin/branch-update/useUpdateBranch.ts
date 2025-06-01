import { useMutation } from "@tanstack/react-query";

import { updateBranch } from "@entities/branch/api/controlBranches";
import type { Branch } from "@entities/branch/model/types";

export const useUpdateBranch = () =>
  useMutation({
    mutationFn: updateBranchAdapter,
    onSuccess: () => {},
  });

interface UpdateBranchAdapter {
  id: string;
  newData: Branch;
}

const updateBranchAdapter = async ({ id, newData }: UpdateBranchAdapter) => {
  const data = await updateBranch(id, newData);

  return data;
};
