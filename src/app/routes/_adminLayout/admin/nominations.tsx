import { createFileRoute } from "@tanstack/react-router";

import AdminNominations from "@pages/admin-nominations/AdminNominations";

export const Route = createFileRoute("/_adminLayout/admin/nominations")({
  component: AdminNominations,
});
