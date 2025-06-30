import api from "@/config/api";
import type { Branch } from "@/types/branch";

export const fetchBranchList = async () => {
  const response = await api.get<Branch[]>("/branch/all");
  return response.data;
};
