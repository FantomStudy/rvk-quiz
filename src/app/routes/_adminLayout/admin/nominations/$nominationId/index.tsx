import { createFileRoute } from "@tanstack/react-router";

import { UpdateNominationPage } from "@pages/admin";

export const Route = createFileRoute(
  "/_adminLayout/admin/nominations/$nominationId/",
)({
  component: UpdateNominationPage,
});
