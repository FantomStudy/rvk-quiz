import { useMutation } from "@tanstack/react-query";

import type { BranchLineMutation, UserLineMutation } from "./types";

import { branchLineSave, userLineSave } from "./api";

export const useBranchLineSave = () =>
  useMutation({
    mutationFn: async (data: BranchLineMutation) => branchLineSave(data),
    onSuccess: () => {
      console.log("Номер линии сохранен");
    },
  });

export const useUserLineSave = () =>
  useMutation({
    mutationFn: (data: UserLineMutation) => userLineSave(data),
    onSuccess: () => {
      console.log("Номер линии сохранен");
    },
  });
