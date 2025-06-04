interface UserBase {
  number: string;
}

export interface User extends UserBase {
  id: number;
}

export type CreateUser = UserBase;
