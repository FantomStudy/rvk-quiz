import { queryOptions, useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import type { AdminCredentials } from "../types";

import { checkAuth, login } from "./api";

export const checkAuthQuery = () =>
  queryOptions({
    queryKey: ["admin-auth"],
    queryFn: checkAuth,
    retry: false,
  });

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: AdminCredentials) => login(credentials),
    onSuccess: () => {
      navigate({ to: "/admin/dashboard" });
    },
  });
};
