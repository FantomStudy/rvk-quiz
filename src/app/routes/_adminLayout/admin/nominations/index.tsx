import { createFileRoute } from "@tanstack/react-router";

import { Nominations } from "@pages/admin";

export const Route = createFileRoute("/_adminLayout/admin/nominations/")({
  component: Nominations,
});
