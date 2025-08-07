import type { Nomination, TestQuestion, User } from "@/types";

export interface SessionData {
  finishedAt: string;
  nomination: Nomination;
  questions: TestQuestion[];
  user: User;
}
