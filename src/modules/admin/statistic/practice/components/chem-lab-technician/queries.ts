import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { ChemLabTechnicianData, ChemLabTechnicianMutation } from "./types";

export const useChemLabTechnician = () =>
  useQuery({
    queryKey: ["chemLabTechnician"],
    queryFn: async () =>
      api
        .get<ChemLabTechnicianData[]>("/chem-lab-technician/table")
        .then((res) => res.data),
  });

export const useChemLabTechnicianSave = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ChemLabTechnicianMutation) =>
      api.patch("/chem-lab-technician/update", data),
    onSuccess: () => {
      console.log("Данные сохранены");
      queryClient.refetchQueries({ queryKey: ["chemLabTechnician"] });
    },
  });
};
