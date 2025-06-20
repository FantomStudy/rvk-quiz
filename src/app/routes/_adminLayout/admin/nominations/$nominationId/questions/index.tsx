import { createFileRoute } from "@tanstack/react-router";

import { QuestionsPage } from "@pages/admin";

import { questionListQuery } from "@entities/question/model/question.queries";

export const Route = createFileRoute(
  "/_adminLayout/admin/nominations/$nominationId/questions/",
)({
  component: QuestionsPage,
  loader: async ({ context, params }) => {
    const nominationId = Number(params.nominationId);
    const questions = await context.queryClient.ensureQueryData(
      questionListQuery(nominationId),
    );

    return { questions };
  },
});
