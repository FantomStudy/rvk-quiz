import { createFileRoute } from "@tanstack/react-router";

import { TestResultPage } from "@/modules/test-passing";

export const Route = createFileRoute("/_headerLayout/result")({
  component: TestResultPage,
});
