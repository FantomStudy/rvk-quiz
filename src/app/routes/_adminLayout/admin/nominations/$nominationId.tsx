import { AxiosError } from "axios";

import { createFileRoute, redirect } from "@tanstack/react-router";

import { UpdateNominationPage } from "@pages/admin";

import { nominationByIdQueryOptions } from "@entities/nomination";

export const Route = createFileRoute(
  "/_adminLayout/admin/nominations/$nominationId",
)({
  component: UpdateNominationPage,
  loader: async ({ context, params }) => {
    try {
      const nominationId = Number(params.nominationId);
      const nomination = await context.queryClient.ensureQueryData(
        nominationByIdQueryOptions(nominationId),
      );

      return { nomination };
    } catch (err) {
      if (err instanceof AxiosError && err.status === 404) {
        console.log("Не удалось найти номинацию");

        throw redirect({ to: "/admin/nominations" });
      }
      throw err;
    }
  },
});
