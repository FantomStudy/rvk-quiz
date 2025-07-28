import { createFileRoute } from "@tanstack/react-router";

import { StartPage } from "@/modules/test-start";

export const Route = createFileRoute("/_headerLayout/")({
  component: StartPage,
});
