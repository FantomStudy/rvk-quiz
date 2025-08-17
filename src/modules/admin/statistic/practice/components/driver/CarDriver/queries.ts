import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { DriverData, DriverMutation } from "../types";

export const useCarDriver = () =>
  useQuery({
    queryKey: ["car-driver"],
    queryFn: () =>
      api.get<DriverData[]>("/car-driver/table").then((res) => res.data),
  });

export const useCarDriverSave = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DriverMutation) => api.patch("/car-driver/update", data),
    onSuccess: () => {
      console.log("Сохранено");
      queryClient.invalidateQueries({ queryKey: ["car-driver"] });
    },
  });
};
