export interface PlumberData {
  branchId: number;
  branchName: string;
  culturePenalty: number;
  hydraulicTest: boolean;
  number: string;
  participantName: string;
  place: number;
  qualityPenalty: number;
  safetyPenalty: number;
  stageScore: number;
  time: string;
  timeScore: number;
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
