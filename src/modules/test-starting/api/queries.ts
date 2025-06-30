import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { useInitializeTest } from "@/store/selectors";

import { type StartTestPayload, startTest } from "./api";

export const useStartTest = () => {
  const navigate = useNavigate();
  const initializeTest = useInitializeTest();

  return useMutation({
    mutationFn: (form: StartTestPayload) => startTest(form),
    onSuccess: (data) => {
      console.log("Тест успешно начат: ", data);
      initializeTest(data);
      navigate({ to: "/test" });
    },
  });
};
