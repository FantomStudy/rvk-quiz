import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/modules/test-starting";

export const Route = createFileRoute("/_headerLayout/")({
  component: HomePage,
});
