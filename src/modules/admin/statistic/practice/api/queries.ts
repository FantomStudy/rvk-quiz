import { useMutation } from "@tanstack/react-query";

import { saveToastError, saveToastSuccess } from "@/shared/lib/toast";

import type { BranchLineMutation, UserLineMutation } from "./types";

import { branchLineSave, userLineSave } from "./api";

export const useBranchLineSave = () =>
  useMutation({
    mutationFn: async (data: BranchLineMutation) => branchLineSave(data),
    onSuccess: () => {
      console.log("Номер линии сохранен");
      saveToastSuccess();
    },
    onError: () => {
      saveToastError();
    },
  });

export const useUserLineSave = () =>
  useMutation({
    mutationFn: async (data: UserLineMutation) => userLineSave(data),
    onSuccess: () => {
      console.log("Номер линии сохранен");
      saveToastSuccess();
    },
    onError: () => {
      saveToastError();
    },
  });
