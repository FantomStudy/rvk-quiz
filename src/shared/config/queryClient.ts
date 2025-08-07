import type { AxiosError } from "axios";

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      gcTime: 60 * 60 * 1000,
      retry: 1,
    },
  },
});

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}
