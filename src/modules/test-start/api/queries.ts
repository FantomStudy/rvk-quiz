import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { useInitAnswers } from "@/store";

import type { StartTestRequest } from "../types";

import { startTest } from "./api";

export const useStartTest = () => {
  const navigate = useNavigate();
  const initAnswers = useInitAnswers();

  return useMutation({
    mutationFn: (form: StartTestRequest) => startTest(form),
    onSuccess: (data) => {
      initAnswers(data.questions);
      navigate({ to: "/test" });
    },
  });
};
