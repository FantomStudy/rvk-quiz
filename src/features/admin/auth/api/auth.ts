import api from "@shared/api";

import type { AdminCredentials, CheckAuthResponse } from "../model/types";

export const login = async (credentials: AdminCredentials) => {
  const response = await api.post("/auth/admin/login", credentials);
  return response.data;
};

export const checkAuth = async () => {
  const response = await api.get<CheckAuthResponse>("/auth/me");
  return response.data;
};
