import api from "@shared/api";

import type { Branch } from "../model/types";

export const createBranch = async (branch: Branch) => {
  const response = await api.post("/branch/create", branch);

  return response.data;
};

export const updateBranch = async (id: string, branch: Branch) => {
  const response = await api.post(`/branch/update/${id}`, branch);

  return response.data;
};

export const deleteBranch = async (id: string) => {
  const response = await api.delete(`/branch/delete/${id}`);

  return response.data;
};
