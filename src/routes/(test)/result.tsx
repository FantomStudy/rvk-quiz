import { createFileRoute } from "@tanstack/react-router";

import { TestResultPage } from "@/modules/test-passing";

export const Route = createFileRoute("/(test)/result")({
  component: TestResultPage,
});
