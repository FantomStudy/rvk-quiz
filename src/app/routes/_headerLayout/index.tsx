import { createFileRoute } from "@tanstack/react-router";

import HomePage from "@pages/home/HomePage";

import { nominationListQuery } from "@entities/nomination";

export const Route = createFileRoute("/_headerLayout/")({
  component: HomePage,
  loader: async ({ context }) => {
    const nominations = await context.queryClient.ensureQueryData(
      nominationListQuery(),
    );
    
    return { nominations };
  },
});
