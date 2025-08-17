export interface AvrMechanicData {
  branchId: number;
  branchName: string;
  lineNumber: number | null;
  place: number;
  practiceScore: number;
  practicNominationId: number;
  theoryScore: number;
  total: number;
  stages: [
    {
      taskNumber: number;
      time: string;
      timeScore: number;
      hydraulicTest: boolean;
      safetyPenalty: number;
      culturePenalty: number;
      qualityPenalty: number;
      stageScore: number;
    },
  ];
}

export interface AvrMechanicMutation {
  branchId: number;
  culturePenalty: number;
  hydraulicTest: boolean;
  qualityPenalty: number;
  safetyPenalty: number;
  taskNumber: number;
  time: string;
}
