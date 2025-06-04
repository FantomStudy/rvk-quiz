import api from "@shared/api";

import type { CreateUser, User } from "../model/user";

export const fetchAllUsers = async () => {
  const response = await api.get<User[]>("/user/all");
  return response.data;
};

export const fetchUserById = async (id: number) => {
  const response = await api.get<User>(`/user/by-id/${id}`);
  return response.data;
};

// CRUD API
export const createUser = async (user: CreateUser) => {
  const response = await api.post("/user/create", user);
  return response.data;
};

export const updateUser = async (id: number, user: CreateUser) => {
  const response = await api.put(`/user/update/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`/user/delete/${id}`);
  return response.data;
};
