import { createFileRoute } from "@tanstack/react-router";

import { TestPage } from "@/modules/test-passing";

export const Route = createFileRoute("/_headerLayout/(dev)/test")({
  component: TestPage,
});
