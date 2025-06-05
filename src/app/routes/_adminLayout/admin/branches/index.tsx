import { createFileRoute } from "@tanstack/react-router";

import { BranchesPage } from "@pages/admin";

import { branchListQuery } from "@entities/branch";

export const Route = createFileRoute("/_adminLayout/admin/branches/")({
  component: BranchesPage,
  loader: async ({ context }) => {
    const branches =
      await context.queryClient.ensureQueryData(branchListQuery());

    return { branches };
  },
});
