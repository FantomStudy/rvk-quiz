import api from "@shared/api";

import type { CreateNomination, Nomination } from "../model/nominaition";

export const fetchNominationList = async () => {
  const response = await api.get<Nomination[]>("/nomination/all");
  return response.data;
};

export const fetchNomination = async (id: number) => {
  const response = await api.get<Nomination>(`/nomination/by-id/${id}`);
  return response.data;
};

// CRUD API
export const createNomination = async (newNomination: CreateNomination) => {
  const response = await api.post(`/nomination/create`, newNomination);
  return response.data;
};

export const updateNomination = async (
  id: number,
  newData: CreateNomination,
) => {
  const response = await api.put(`/nomination/update/${id}`, newData);
  return response.data;
};

export const deleteNomination = async (id: number) => {
  const response = await api.delete(`/nomination/delete/${id}`);
  return response.data;
};
