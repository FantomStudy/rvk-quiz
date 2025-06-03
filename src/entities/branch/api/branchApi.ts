import api from "@shared/api";

import type { Branch, CreateBranch } from "../model/branch";

export const fetchAllBranches = async () => {
  const response = await api.get<Branch[]>("/branch/all");

  return response.data;
};

export const fetchBranchById = async (branchId: number) => {
  const response = await api.get<Branch>(`/branch/by-id/${branchId}`);

  return response.data;
};

// CRUD API
export const createBranch = async (branch: CreateBranch) => {
  const response = await api.post("/branch/create", branch);

  return response.data;
};

export const updateBranch = async (id: number, branch: CreateBranch) => {
  const response = await api.put(`/branch/update/${id}`, branch);

  return response.data;
};

export const deleteBranch = async (id: number) => {
  const response = await api.delete(`/branch/delete/${id}`);

  return response.data;
};
