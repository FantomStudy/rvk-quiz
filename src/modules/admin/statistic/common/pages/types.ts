export interface BranchResult {
  branchName: string;
  place: number;
  practiceScore: number;
  team: string[];
  theoryScore: number;
  totalScore: number;
}

export interface UserResult {
  branchName: string;
  fullName: string;
  place: number;
  practiceScore: number;
  theoryScore: number;
  totalScore: number;
}

export type ResultName =
  | "avrMechanic"
  | "avrPlumber"
  | "avrSewer"
  | "avrSewerPlumber"
  | "chemLabTecnician"
  | "driverB"
  | "driverC"
  | "welder";

export type ResultMap = Record<
  ResultName,
  { name: string; path: string; type?: string }
>;
