import { createFileRoute } from "@tanstack/react-router";

import { TestPage } from "@/modules/test-passing";

export const Route = createFileRoute("/_testLayout/test")({
  component: TestPage,
});
