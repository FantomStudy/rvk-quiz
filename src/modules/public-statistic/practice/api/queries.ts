import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { AddPracticeData } from "../types";

import { addPractice, fetchPracticeList } from "./api";

export const usePracticeList = () =>
  useQuery({
    queryKey: ["practiceList"],
    queryFn: fetchPracticeList,
  });

export const useAddPractice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddPracticeData) => addPractice({ ...data }),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ["practiceList"] });
    },
  });
};
