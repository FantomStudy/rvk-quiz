import { AxiosError } from "axios";

import { createFileRoute, redirect } from "@tanstack/react-router";

import { UpdateBranchPage } from "@pages/admin";

import { branchByIdQueryOptions } from "@entities/branch";

export const Route = createFileRoute("/_adminLayout/admin/branches/$branchId")({
  component: UpdateBranchPage,
  loader: async ({ context, params }) => {
    try {
      const branchId = Number(params.branchId);
      const branch = await context.queryClient.ensureQueryData(
        branchByIdQueryOptions(branchId),
      );

      return { branch };
    } catch (err) {
      if (err instanceof AxiosError && err.status === 404) {
        console.log("Не удалось найти филиал");

        throw redirect({ to: "/admin/branches" });
      }
      throw err;
    }
  },
});
