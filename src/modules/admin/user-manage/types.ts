export type UserList = {
  id: number;
  fullName: UserInfo | null;
  number: string;
}[];

interface UserInfo {
  id: number;
  fullName: string;
  branch: {
    id: number;
    address: string;
  };
}

export type FullNameList = {
  id: number;
  fullName: string;
}[];

export interface UpdateUserMutation {
  fullNameId: number;
  userId: number;
}
