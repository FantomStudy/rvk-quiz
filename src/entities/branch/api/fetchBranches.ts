import api from "@shared/api";

export const fetchAllBranches = async () => {
  const response = await api.get("/branch/all");

  return response.data;
};

export const fetchBranchById = async (branchId: string) => {
  const response = await api.get(`/branch/by-id/${branchId}`);

  return response.data;
};
