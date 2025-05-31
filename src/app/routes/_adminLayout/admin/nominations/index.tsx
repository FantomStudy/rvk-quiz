import { createFileRoute } from "@tanstack/react-router";

import { NominationsPage } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/nominations/")({
  component: NominationsPage,
});
