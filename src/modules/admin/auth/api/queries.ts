import { queryOptions, useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { checkAuth, login } from "./api";
import type { AdminCredentials } from "./types";

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
      console.log("dfhhkjdfh");
      navigate({ to: "/admin/dashboard" });
    },
  });
};
