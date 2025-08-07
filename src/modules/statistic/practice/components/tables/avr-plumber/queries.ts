import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { AvrPlumberData, AvrPlumberMutation } from "./types";

export const useAvrPlumber = () =>
  useQuery({
    queryKey: ["avr-plumber"],
    queryFn: () =>
      api.get<AvrPlumberData[]>("/avr-plumber/table").then((r) => r.data),
  });

export const useAvrPlumberSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AvrPlumberMutation) =>
      api.patch("/avr-plumber/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      queryClient.refetchQueries({ queryKey: ["avr-plumber"] });
    },
  });
};
