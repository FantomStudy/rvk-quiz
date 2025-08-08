import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

export const useCarDriver = () =>
  useQuery({
    queryKey: ["car-driver"],
    queryFn: () => api.get("/car-driver/table").then((res) => res.data),
  });

export const useCarDriverSave = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: unknown) => api.post("/car-driver/update", data),
    onSuccess: () => {
      console.log("Сохранено");
      queryClient.invalidateQueries({ queryKey: ["car-driver"] });
    },
  });
};

export const useTruckDriver = () =>
  useQuery({
    queryKey: ["truck-driver"],
    queryFn: () => api.get("/car-driver/table").then((r) => r.data),
  });

export const useTruckDriverSave = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: unknown) => api.post("/car-driver/update", data),
    onSuccess: () => {
      console.log("Сохранено");
      queryClient.invalidateQueries({ queryKey: ["truck-driver"] });
    },
  });
};
