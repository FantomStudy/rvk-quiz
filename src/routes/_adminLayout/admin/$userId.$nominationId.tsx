import { createFileRoute } from "@tanstack/react-router";

import { ResultsTable } from "@/components/widgets";

export const Route = createFileRoute(
  "/_adminLayout/admin/$userId/$nominationId",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId, nominationId } = Route.useParams();

  return (
    <div className="container">
      <ResultsTable
        userId={Number(userId)}
        nominationId={Number(nominationId)}
      />
    </div>
  );
}
