import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { login } from "../api/login";
import type { AdminCredentials } from "./login";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: AdminCredentials) => login(data),
    onSuccess: () => navigate({ to: "/admin/analytic" }),
  });
};
