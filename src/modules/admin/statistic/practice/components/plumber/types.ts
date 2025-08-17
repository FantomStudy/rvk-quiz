export interface PlumberData {
  branchId: number;
  branchName: string;
  culturePenalty: number;
  hydraulicTest: boolean;
  lineNumber: number | null;
  number: string;
  participantName: string;
  place: number;
  practiceScore: number;
  practicNominationId: number;
  qualityPenalty: number;
  safetyPenalty: number;
  theoryScore: number;
  time: string;
  timeScore: number;
  total: number;
  userId: number;
}

export interface PlumberMutation {
  culturePenalty: number;
  hydraulicTest: boolean;
  qualityPenalty: number;
  safetyPenalty: number;
  time: string;
  userId: number;
}
