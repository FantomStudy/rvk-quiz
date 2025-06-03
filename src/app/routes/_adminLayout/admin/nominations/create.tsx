import { createFileRoute } from "@tanstack/react-router";

import { CreateNominationPage } from "@pages/admin";

export const Route = createFileRoute(
  "/_adminLayout/admin/nominations/create",
)({
  component: CreateNominationPage,
});
