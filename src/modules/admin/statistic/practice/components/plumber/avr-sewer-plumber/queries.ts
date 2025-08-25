import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";
import { saveToastError, saveToastSuccess } from "@/shared/lib/toast";

import type { PlumberData, PlumberMutation } from "../types";

export const useAvrSewerPlumber = () =>
  useQuery({
    queryKey: ["avr-sewer-plumber"],
    queryFn: async () =>
      api.get<PlumberData[]>("/avr-sewer-plumber/table").then((r) => r.data),
  });

export const useAvrSewerPlumberSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: PlumberMutation) =>
      api.patch("/avr-sewer-plumber/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      saveToastSuccess();
      queryClient.refetchQueries({ queryKey: ["avr-sewer-plumber"] });
    },
    onError: () => {
      saveToastError();
    },
  });
};
