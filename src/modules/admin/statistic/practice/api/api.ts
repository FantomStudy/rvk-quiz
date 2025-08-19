import { api } from "@/shared/config";

import type { BranchLineMutation, UserLineMutation } from "./types";

export const branchLineSave = async (data: BranchLineMutation) =>
  api.patch("/branch-line-number", data);

export const userLineSave = async (data: UserLineMutation) =>
  api.patch("/user-line-number", data);
