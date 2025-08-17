import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { AvrSewerData, AvrSewerMutation } from "./types";

export const useAvrSewer = () =>
  useQuery({
    queryKey: ["avr-sewer"],
    queryFn: () =>
      api.get<AvrSewerData[]>("/avr-sewer/table").then((r) => r.data),
  });

export const useAvrSewerSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AvrSewerMutation) =>
      api.patch("/avr-sewer/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      queryClient.refetchQueries({ queryKey: ["avr-sewer"] });
    },
  });
};
