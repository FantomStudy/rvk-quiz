import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "@tanstack/react-router";

import { deleteQuestion } from "@entities/question/api/questionApi";
import { questionKeys } from "@entities/question/model/queryKeys";

export const useDeleteQuestion = () => {
  const { nominationId } = useParams({
    from: "/_adminLayout/admin/nominations/$nominationId",
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteQuestionAdapter,
    onSuccess: async (_, id) => {
      console.log("Вопрос удален!");
      queryClient.removeQueries({
        queryKey: questionKeys.byId(id),
      });
      await queryClient.refetchQueries({
        queryKey: questionKeys.byNomination(Number(nominationId)),
      });
      navigate({
        to: "/admin/nominations/$nominationId/questions",
        params: { nominationId },
      });
    },
  });
};

const deleteQuestionAdapter = async (id: number) => {
  const data = await deleteQuestion(id);

  return data;
};
