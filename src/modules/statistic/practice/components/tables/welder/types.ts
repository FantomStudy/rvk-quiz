export interface WelderData {
  branchId: number;
  branchName: string;
  participantName: string;
  place: number;
  total: number;
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
  participantName: string;
  radiographicControl: number;
  safetyPenalty: number;
  taskNumber: number;
  time: string;
  visualMeasurement: number;
}
