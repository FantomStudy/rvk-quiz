export interface SaveUserData {
  branchId: number | null;
  fullName: string | null;
}

export interface SaveUserMutation {
  userData: SaveUserData;
  userId: number;
}
