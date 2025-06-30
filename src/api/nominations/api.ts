import api from "@/config/api";
import type { Nomination } from "@/types/nomination";

export const fetchNominationList = async () => {
  const response = await api.get<Nomination[]>("/nomination/all");
  return response.data;
};

// export const fetchNomination = async (id: number) => {
//   const response = await api.get<Nomination>(`/nomination/by-id/${id}`);
//   return response.data;
// };
