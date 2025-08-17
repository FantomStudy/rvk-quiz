import { useMutation } from "@tanstack/react-query";

import { api } from "@/shared/config";

import type { BranchLineMutation, UserLineMutation } from "./types";

export const useBranchLineSave = () =>
  useMutation({
    mutationFn: async (data: BranchLineMutation) =>
      api.patch("/branch-line-number", data),
    onSuccess: () => {
      console.log("Номер линии сохранен");
    },
  });

export const useUserLineSave = () =>
  useMutation({
    mutationFn: (data: UserLineMutation) =>
      api.patch("/user-line-number", data),
    onSuccess: () => {
      console.log("Номер линии пользователя сохранен");
    },
  });
