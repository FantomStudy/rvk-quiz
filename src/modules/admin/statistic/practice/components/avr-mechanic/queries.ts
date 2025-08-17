import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { AvrMechanicData, AvrMechanicMutation } from "./types";

export const useAvrMechanic = () =>
  useQuery({
    queryKey: ["avr-mechanic"],
    queryFn: () =>
      api.get<AvrMechanicData[]>("/avr-mechanic/table").then((r) => r.data),
  });

export const useAvrMechanicSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (req: AvrMechanicMutation) =>
      api.patch("/avr-mechanic/upsert", req),
    onSuccess: () => {
      console.log("Данные сохранены");
      queryClient.refetchQueries({ queryKey: ["avr-mechanic"] });
    },
  });
};
