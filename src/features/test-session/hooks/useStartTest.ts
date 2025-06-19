import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { useInitializeTest } from "@features/test-pass/store/testStore";

import { startTest } from "../api/testSessionApi";
import type { StartTestForm } from "../types";

export const useStartTest = () => {
  const initializeTest = useInitializeTest();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ number, nominationId }: StartTestForm) =>
      startTest({ number, nominationId }),
    onSuccess: (data) => {
      console.log("Тест успешно начат");
      initializeTest(data);
      navigate({ to: "/test", replace: true });
    },
  });
};
