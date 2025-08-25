import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";
import { saveToastError, saveToastSuccess } from "@/shared/lib/toast";

import type { WelderData, WelderMutation } from "./types";

export const useWelder = () =>
  useQuery({
    queryKey: ["welder"],
    queryFn: async () =>
      api.get<WelderData[]>("/welder/table").then((r) => r.data),
  });

export const useWelderSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: WelderMutation) =>
      api.patch("/welder/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      saveToastSuccess();
      queryClient.refetchQueries({ queryKey: ["welder"] });
    },
    onError: () => {
      saveToastError();
    },
  });
};
