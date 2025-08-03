import { createFileRoute } from "@tanstack/react-router";

import { testResultQuery, UserSessionPage } from "@/modules/admin";

// TODO: ПЕРЕПИСАТЬ НА ЛОГИКУ С АЙДИ СЕССИИ
export const Route = createFileRoute(
  "/_adminLayout/admin/$userId/$nominationId"
)({
  component: RouteComponent,
  loader: async ({ context, params }) =>
    context.queryClient.ensureQueryData(testResultQuery(params)),
});

function RouteComponent() {
  const result = Route.useLoaderData();
  return <UserSessionPage testResult={result} />;
}
