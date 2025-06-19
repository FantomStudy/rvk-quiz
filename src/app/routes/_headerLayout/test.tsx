import { createFileRoute } from "@tanstack/react-router";

import TestPage from "@pages/test/TestPage";

export const Route = createFileRoute("/_headerLayout/test")({
  component: TestPage,
});
