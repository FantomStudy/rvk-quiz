import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { PlumberData, PlumberMutation } from "../types";

export const useAvrPlumber = () =>
  useQuery({
    queryKey: ["avr-plumber"],
    queryFn: async () =>
      api.get<PlumberData[]>("/avr-plumber/table").then((r) => r.data),
  });

export const useAvrPlumberSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: PlumberMutation) =>
      api.patch("/avr-plumber/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      queryClient.refetchQueries({ queryKey: ["avr-plumber"] });
    },
  });
};
