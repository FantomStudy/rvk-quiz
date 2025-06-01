import type { AxiosError } from "axios";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { login } from "../api/auth";
import type { AdminCredentials } from "./types";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginAdapter,
    onSuccess: () => navigate({ to: "/admin/nominations" }),
    onError: (err: AxiosError) => {
      console.log(err.response?.data);
    },
  });
};

const loginAdapter = async (credentials: AdminCredentials) => {
  const data = await login(credentials);
  return data;
};
