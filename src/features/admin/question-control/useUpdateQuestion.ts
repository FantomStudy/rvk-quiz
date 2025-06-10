import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { updateQuestion } from "@entities/question/api/questionApi";
import { questionKeys } from "@entities/question/model/queryKeys";
import type { CreateQuestion } from "@entities/question/model/question";

export const useUpdateQuestion = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateQuestionAdapter,
    onSuccess: async (_, { question }) => {
      console.log("Вопрос сохранен!");
      await queryClient.refetchQueries({
        queryKey: questionKeys.byNomination(question.nominationId),
      });
      navigate({
        to: "/admin/nominations/$nominationId/questions",
        params: { nominationId: question.nominationId.toString() },
      });
    },
  });
};

interface UpdateQuestionAdapterArgs {
  id: number;
  question: CreateQuestion;
}

const updateQuestionAdapter = async ({
  id,
  question,
}: UpdateQuestionAdapterArgs) => {
  const data = await updateQuestion(id, question);
  return data;
};
