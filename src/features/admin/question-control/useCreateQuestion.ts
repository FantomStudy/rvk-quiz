import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { createQuestion } from "@entities/question/api/questionApi";
import { questionKeys } from "@entities/question/model/queryKeys";
import type { CreateQuestion } from "@entities/question/model/question";

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createQuestionAdapter,
    onSuccess: async (_, newQuestion) => {
      console.log("Вопрос создан!");
      await queryClient.refetchQueries({
        queryKey: questionKeys.byNomination(newQuestion.nominationId),
      });
      navigate({
        to: "/admin/nominations/$nominationId/questions",
        params: { nominationId: newQuestion.nominationId.toString() },
      });
    },
  });
};

const createQuestionAdapter = async (newQuestion: CreateQuestion) => {
  const data = await createQuestion(newQuestion);
  return data;
};
