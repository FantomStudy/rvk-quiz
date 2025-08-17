import { createFileRoute } from "@tanstack/react-router";

import { UserSessionPage } from "@/modules/admin";

export const Route = createFileRoute(
  "/_adminLayout/admin/$userId/$nominationId",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId, nominationId } = Route.useParams();

  return (
    <UserSessionPage
      userId={Number(userId)}
      nominationId={Number(nominationId)}
    />
  );
}
