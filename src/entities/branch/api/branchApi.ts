import api from "@shared/api";

import type { Branch, CreateBranch } from "../model/branch";

export const fetchBranchList = async () => {
  const response = await api.get<Branch[]>("/branch/all");
  return response.data;
};

export const fetchBranch = async (id: number) => {
  const response = await api.get<Branch>(`/branch/by-id/${id}`);
  return response.data;
};

// CRUD API
export const createBranch = async (newBranch: CreateBranch) => {
  const response = await api.post("/branch/create", newBranch);
  return response.data;
};

export const updateBranch = async (id: number, newData: CreateBranch) => {
  const response = await api.put(`/branch/update/${id}`, newData);
  return response.data;
};

export const deleteBranch = async (id: number) => {
  const response = await api.delete(`/branch/delete/${id}`);
  return response.data;
};
