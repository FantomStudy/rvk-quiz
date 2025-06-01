import api from "@shared/api";

import type { AdminCredentials } from "../model/login";

export const login = async (credentials: AdminCredentials) => {
  const response = await api.post("/auth/admin/login", credentials);
  return response.data;
};
