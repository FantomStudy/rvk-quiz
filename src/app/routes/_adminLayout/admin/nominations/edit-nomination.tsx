import { createFileRoute } from "@tanstack/react-router";

import { EditNominationPage } from "@pages/admin";

export const Route = createFileRoute(
  "/_adminLayout/admin/nominations/edit-nomination",
)({
  component: EditNominationPage,
});
