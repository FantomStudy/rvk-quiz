interface UserBase {
  number: string;
}

export interface User extends UserBase {
  id: number;
  branchId: number | null;
  fullName: string | null;
}
