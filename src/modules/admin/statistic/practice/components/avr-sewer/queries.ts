import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";
import { saveToastError, saveToastSuccess } from "@/shared/lib/toast";

import type { AvrSewerData, AvrSewerMutation } from "./types";

export const useAvrSewer = () =>
  useQuery({
    queryKey: ["avr-sewer"],
    queryFn: async () =>
      api.get<AvrSewerData[]>("/avr-sewer/table").then((r) => r.data),
  });

export const useAvrSewerSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AvrSewerMutation) =>
      api.patch("/avr-sewer/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      saveToastSuccess();
      queryClient.refetchQueries({ queryKey: ["avr-sewer"] });
    },
    onError: () => {
      saveToastError();
    },
  });
};
