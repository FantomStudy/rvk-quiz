import { createFileRoute } from "@tanstack/react-router";

import { NominationsPage } from "@pages/admin";

import { allNominationsQueryOptions } from "@entities/nomination/model/queryOptions/allNominationsQueryOptions";

export const Route = createFileRoute("/_adminLayout/admin/nominations/")({
  component: NominationsPage,
  loader: async ({ context }) => {
    const nominations = await context.queryClient.ensureQueryData(
      allNominationsQueryOptions(),
    );

    return { nominations };
  },
});
