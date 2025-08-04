export interface UpdateUserMutation {
  userData: UpdateUserData;
  userId: number;
}

interface UpdateUserData {
  branchId: number | null;
  fullName: string | null;
}
