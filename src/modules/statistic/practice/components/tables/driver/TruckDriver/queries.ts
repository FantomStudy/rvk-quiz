import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { DriverData, DriverMutation } from "../types";

export const useTruckDriver = () =>
  useQuery({
    queryKey: ["truck-driver"],
    queryFn: () =>
      api.get<DriverData[]>("/truck-driver/table").then((r) => r.data),
  });

export const useTruckDriverSave = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DriverMutation) =>
      api.patch("/truck-driver/update", data),
    onSuccess: () => {
      console.log("Сохранено");
      queryClient.invalidateQueries({ queryKey: ["truck-driver"] });
    },
  });
};
