import { api } from "@/config";

import type { AdminCredentials, CheckAuthResponse } from "../types";

export const login = async (credentials: AdminCredentials) => {
  const response = await api.post("/auth/admin/login", credentials);
  return response.data;
};

export const checkAuth = async () => {
  const response = await api.get<CheckAuthResponse>("/auth/me");
  return response.data;
};
