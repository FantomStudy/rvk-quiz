import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: (err) => {
        console.error("Global query error:", err);
        return false;
      },
    },
    mutations: {
      throwOnError: (err) => {
        console.error("Global mutation error:", err);
        return false;
      },
    },
  },
});
