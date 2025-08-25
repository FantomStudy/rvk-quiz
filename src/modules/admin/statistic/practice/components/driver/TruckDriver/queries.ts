import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";
import { saveToastError, saveToastSuccess } from "@/shared/lib/toast";

import type { DriverData, DriverMutation } from "../types";

export const useTruckDriver = () =>
  useQuery({
    queryKey: ["truck-driver"],
    queryFn: async () =>
      api.get<DriverData[]>("/truck-driver/table").then((r) => r.data),
  });

export const useTruckDriverSave = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DriverMutation) =>
      api.patch("/truck-driver/update", data),
    onSuccess: async () => {
      console.log("Сохранено");
      saveToastSuccess();
      queryClient.invalidateQueries({ queryKey: ["truck-driver"] });
    },
    onError: () => {
      saveToastError();
    },
  });
};
