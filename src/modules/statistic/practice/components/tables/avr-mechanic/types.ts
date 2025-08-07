export interface AvrMechanicData {
  branchId: number;
  branchName: string;
  place: number;
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
  culturePenalty?: number;
  hydraulicTest?: boolean;
  nominationId?: number;
  qualityPenalty?: number;
  safetyPenalty?: number;
  taskNumber: number;
  time?: string;
  timeScore?: string;
}
