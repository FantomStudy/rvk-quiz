import type { User } from "@/types/user";

import { api } from "@/config";

import type { SaveUserData } from "../types";

export const fetchUserList = async () =>
  api.get<User[]>("/user/all").then((r) => r.data);

export const updateUser = async (userId: number, userData: SaveUserData) =>
  api.put<User>(`/user/update/${userId}`, userData).then((r) => r.data);
