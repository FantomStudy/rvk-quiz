import { createFileRoute } from "@tanstack/react-router";

import { NominationsPage } from "@pages/admin";

import { nominationListQuery } from "@entities/nomination/model/nomination.queries";

export const Route = createFileRoute("/_adminLayout/admin/nominations/")({
  component: NominationsPage,
  loader: async ({ context }) => {
    const nominations = await context.queryClient.ensureQueryData(
      nominationListQuery(),
    );

    return { nominations };
  },
});
