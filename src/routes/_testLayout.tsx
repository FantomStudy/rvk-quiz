import { createFileRoute, Outlet } from "@tanstack/react-router";

import { sessionDataQuery } from "@/modules/test-passing";

export const Route = createFileRoute("/_testLayout")({
  component: Outlet,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(sessionDataQuery),
});
