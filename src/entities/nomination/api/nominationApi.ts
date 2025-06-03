import api from "@shared/api";

import type { CreateNomination, Nomination } from "../model/nominaition";

export const fetchAllNominations = async () => {
  const response = await api.get<Nomination[]>("/nomination/all");

  return response.data;
};

export const fetchNominationById = async (id: number) => {
  const response = await api.get<Nomination>(`/nomination/by-id/${id}`);

  return response.data;
};

// CRUD API
export const createNomination = async (nomination: CreateNomination) => {
  const response = await api.post(`/nomination/create`, nomination);

  return response.data;
};

export const updateNomination = async (
  id: number,
  nomination: CreateNomination,
) => {
  const response = await api.put(`/nomination/update/${id}`, nomination);

  return response.data;
};

export const deleteNomination = async (id: number) => {
  const response = await api.delete(`/nomination/delete/${id}`);

  return response.data;
};
