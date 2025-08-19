import { api } from "@/shared/config";

import type { FullNameList, UpdateUserMutation, UserList } from "../types";

export const fetchUserList = async () =>
  api.get<UserList>("/user/all").then((r) => r.data);

export const fetchFullNameList = async () =>
  api.get<FullNameList>("/full-name/find-all").then((r) => r.data);

export const updateUser = async ({ userId, fullNameId }: UpdateUserMutation) =>
  api.put(`/user/update/${userId}`, { fullNameId }).then((r) => r.data);
