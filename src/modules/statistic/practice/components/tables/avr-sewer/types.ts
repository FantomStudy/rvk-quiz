interface AvrSewerStage {
  culturePenalty: number;
  hydraulicTest: boolean;
  qualityPenalty: number;
  safetyPenalty: number;
  stageScore: number;
  taskNumber: number;
  time: string;
  timeDisplay: string;
  timeScore: number;
}

export interface AvrSewerData {
  branchId: number;
  branchName: string;
  place: number;
  stages: AvrSewerStage[];
  total: number;
}

export interface AvrSewerMutation {
  branchId: number;
  culturePenalty: number;
  hydraulicTest: boolean;
  qualityPenalty: number;
  safetyPenalty: number;
  taskNumber: number;
  time: string;
}
