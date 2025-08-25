import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/shared/config";
import { saveToastError, saveToastSuccess } from "@/shared/lib/toast";

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
      saveToastSuccess();
      queryClient.refetchQueries({ queryKey: ["chemLabTechnician"] });
    },
    onError: () => {
      saveToastError();
    },
  });
};
