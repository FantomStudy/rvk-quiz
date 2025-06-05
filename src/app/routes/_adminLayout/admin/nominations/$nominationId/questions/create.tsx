import { createFileRoute } from "@tanstack/react-router";

import CreateQuestionPage from "@pages/admin/questions/CreateQuestionPage";

export const Route = createFileRoute(
  "/_adminLayout/admin/nominations/$nominationId/questions/create",
)({
  component: CreateQuestionPage,
});
