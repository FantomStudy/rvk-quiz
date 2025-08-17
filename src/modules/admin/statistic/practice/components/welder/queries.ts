import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { WelderData, WelderMutation } from "./types";

export const useWelder = () =>
  useQuery({
    queryKey: ["welder"],
    queryFn: () => api.get<WelderData[]>("/welder/table").then((r) => r.data),
  });

export const useWelderSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: WelderMutation) => api.patch("/welder/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      queryClient.refetchQueries({ queryKey: ["welder"] });
    },
  });
};
