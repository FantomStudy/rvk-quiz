import { useQuery } from "@tanstack/react-query";

import { fetchNominationList } from "./api";

export const useNominationList = () =>
  useQuery({
    queryKey: ["nominations"],
    queryFn: fetchNominationList,
  });

// export const useNomination = (id: number) =>
//   useQuery({
//     queryKey: ["nominations", id],
//     queryFn: () => fetchNomination(id),
//   });
