import { createFileRoute } from "@tanstack/react-router";

import UpdateQuestionPage from "@pages/admin/questions/UpdateQuestionPage";

export const Route = createFileRoute(
  "/_adminLayout/admin/nominations/$nominationId/questions/$questionId",
)({
  component: UpdateQuestionPage,
});
