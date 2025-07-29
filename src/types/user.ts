import type { Branch } from "./branch";

interface UserBase {
  number: string;
}

export interface User extends UserBase {
  id: number;
  branch: Branch | null;
  fullName: string | null;
}
