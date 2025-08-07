import { useQuery } from "@tanstack/react-query";

import { fetchQuestionPhoto } from "./api";

export const useQuestionPhoto = (fileName: string) =>
  useQuery({
    queryKey: ["questionImage", fileName],
    queryFn: () => fetchQuestionPhoto(fileName),
    enabled: !!fileName,
    staleTime: Infinity,
    gcTime: Infinity,
  });
