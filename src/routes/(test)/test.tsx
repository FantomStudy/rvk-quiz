import { createFileRoute } from "@tanstack/react-router";

import { sessionDataQuery, TestPage } from "@/modules/test-passing";

export const Route = createFileRoute("/(test)/test")({
  component: TestPage,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(sessionDataQuery),
});
