import { useMutation } from "@tanstack/react-query";

import { createBranch } from "@entities/branch/api/controlBranches";
import type { Branch } from "@entities/branch/model/types";

export const useCreateBranch = () =>
  useMutation({
    mutationFn: createBranchAdapter,
    onSuccess: () => {
      console.log("Филиал создан успешно");
    },
  });

const createBranchAdapter = async (newBranch: Branch) => {
  const data = await createBranch(newBranch);

  return data;
};
