import { AxiosError } from "axios";

import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { nominationQuery } from "@entities/nomination";

export const Route = createFileRoute(
  "/_adminLayout/admin/nominations/$nominationId",
)({
  component: RouteLayout,
  loader: async ({ context, params }) => {
    try {
      const nominationId = Number(params.nominationId);
      const nomination = await context.queryClient.ensureQueryData(
        nominationQuery(nominationId),
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

function RouteLayout() {
  return <Outlet />;
}
