import { createFileRoute } from "@tanstack/react-router";

import { TestCompletePage } from "@/modules/test-passing";

export const Route = createFileRoute("/_headerLayout/complete")({
  component: TestCompletePage,
});
