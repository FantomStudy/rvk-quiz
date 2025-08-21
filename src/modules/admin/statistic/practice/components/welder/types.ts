export interface WelderData {
  branchId: number;
  branchName: string;
  lineNumber: number | null;
  participantName: string;
  place: number;
  practiceScore: number;
  practicNominationId: number;
  theoryScore: number;
  total: number;
  totalStages: number;
  userId: number;
  stages: [
    {
      taskNumber: number;
      time: string;
      timeScore: number;
      culturePenalty: number;
      safetyPenalty: number;
      operationalControl: number;
      visualMeasurement: number;
      radiographicControl: number;
      stageScore: number;
    },
  ];
}
export interface WelderMutation {
  branchId: number;
  culturePenalty: number;
  operationalControl: number;
  radiographicControl: number;
  safetyPenalty: number;
  taskNumber: number;
  time: string;
  userId: number;
  visualMeasurement: number;
}
