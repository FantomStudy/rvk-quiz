import { createFileRoute } from "@tanstack/react-router";

import { TestCompletePage } from "@/modules/test-passing";

export const Route = createFileRoute("/_testLayout/complete")({
  component: TestCompletePage,
});
