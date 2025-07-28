import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import type { StartTestResponse } from "../types";

import { startTest } from "./api";
import { useInitializeTest } from "@/store/selectors";

// TODO: REVIEW STORE
export const useStartTest = () => {
  const navigate = useNavigate();
  const initTest = useInitializeTest();

  return useMutation({
    mutationFn: (form: StartTestResponse) => startTest(form),
    onSuccess: (data) => {
      initTest(data);
      navigate({ to: "/test" });
    },
  });
};
