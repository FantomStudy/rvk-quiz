import { queryOptions, useQuery } from "@tanstack/react-query";

import {
  fetchQuestion,
  fetchQuestionList,
  fetchQuestionPhoto,
} from "../api/question.api";
import { questionKeys } from "./question.keys";

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

export const useQuestionPhoto = (fileName: string) =>
  useQuery({
    queryKey: ["questionImage", fileName],
    queryFn: () => fetchQuestionPhoto(fileName),
    enabled: !!fileName,
    staleTime: Infinity,
    gcTime: Infinity,
  });
