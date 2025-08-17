import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { PlumberData, PlumberMutation } from "../types";

export const useAvrSewerPlumber = () =>
  useQuery({
    queryKey: ["avr-sewer-plumber"],
    queryFn: () =>
      api.get<PlumberData[]>("/avr-sewer-plumber/table").then((r) => r.data),
  });

export const useAvrSewerPlumberSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PlumberMutation) =>
      api.patch("/avr-sewer-plumber/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      queryClient.refetchQueries({ queryKey: ["avr-sewer-plumber"] });
    },
  });
};
