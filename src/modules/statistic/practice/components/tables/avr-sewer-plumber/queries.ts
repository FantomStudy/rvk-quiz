import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { AvrSewerPlumberData, AvrSewerPlumberMutation } from "./types";

export const useAvrSewerPlumber = () =>
  useQuery({
    queryKey: ["avr-sewer-plumber"],
    queryFn: () =>
      api.get<AvrSewerPlumberData[]>("/avr-plumber/table").then((r) => r.data),
  });

export const useAvrPlumberSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AvrSewerPlumberMutation) =>
      api.patch("/avr-plumber/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      queryClient.refetchQueries({ queryKey: ["avr-sewer-plumber"] });
    },
  });
};
