import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";
import { saveToastError, saveToastSuccess } from "@/shared/lib/toast";

import type { DriverData, DriverMutation } from "../types";

export const useCarDriver = () =>
  useQuery({
    queryKey: ["car-driver"],
    queryFn: async () =>
      api.get<DriverData[]>("/car-driver/table").then((res) => res.data),
  });

export const useCarDriverSave = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: DriverMutation) =>
      api.patch("/car-driver/update", data),
    onSuccess: () => {
      console.log("Сохранено");
      saveToastSuccess();
      queryClient.invalidateQueries({ queryKey: ["car-driver"] });
    },
    onError: () => {
      saveToastError();
    },
  });
};
