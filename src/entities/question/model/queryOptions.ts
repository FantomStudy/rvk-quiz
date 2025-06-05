import { queryOptions } from "@tanstack/react-query";

import { fetchQuestion, fetchQuestionList } from "../api/questionApi";
import { questionKeys } from "./queryKeys";

export const questionListQuery = (nominationId: number) =>
  queryOptions({
    queryKey: questionKeys.byNomination(nominationId),
    queryFn: () => fetchQuestionList(nominationId),
  });

export const questionQuery = (id: number) =>
  queryOptions({
    queryKey: questionKeys.byId(id),
    queryFn: () => fetchQuestion(id),
  });
