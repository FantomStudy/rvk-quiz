import { queryOptions, useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import type { TestAnswer } from "@/types/test";

import { useSetResults } from "@/store";

import { fetchSessionData, finishTest } from "./api";

export const useFinishTest = () => {
  const navigate = useNavigate();
  const setResults = useSetResults();

  return useMutation({
    mutationFn: (answers: TestAnswer[]) => finishTest(answers),
    onSuccess: (data) => {
      console.log("Данные сохранены и результат получен!");
      setResults(data);
      navigate({ to: "/complete" });
    },
  });
};

export const sessionDataQuery = queryOptions({
  queryKey: ["sessionData"],
  queryFn: fetchSessionData,
  staleTime: 0,
  gcTime: 0,
});
