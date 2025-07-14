import api from "@/config/api";

import type { AdminTestResultParams, AdminTestResultResponse } from "./types";

export const fetchAdminTestResult = async (params: AdminTestResultParams) => {
  const response = await api.get<AdminTestResultResponse>(
    `/tests/result-table/${params.userId}/${params.nominationId}`,
  );

  return response.data;
};
