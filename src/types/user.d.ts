interface UserBase {
  number: string;
}

export interface User extends UserBase {
  id: number;
  fullName: string | null;
  branchId: number | null;
}

export type CreateUser = UserBase;
