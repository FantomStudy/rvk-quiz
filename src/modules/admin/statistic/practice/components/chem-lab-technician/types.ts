export interface ChemLabTechnicianData {
  branchId: number;
  branchName: string;
  lineNumber: number | null;
  number: string;
  participantName: string;
  place: number | null;
  practiceScore: number;
  practicNominationId: number;
  theoryScore: number;
  total: number;
  userId: number;
  stages: [
    {
      name: string;
      time: string;
      timeScore: number;
      quality: number;
      culture: number;
      safety: number;
      total: number;
    },
  ];
}

export interface ChemLabTechnicianMutation {
  stage1aCulture?: number;
  stage1aQuality?: number;
  stage1aSafety?: number;
  stage1aTime?: string;
  stage1bCulture?: number;
  stage1bQuality?: number;
  stage1bSafety?: number;
  stage1bTime?: string;
  stage2Culture?: number;
  stage2Quality?: number;
  stage2Safety?: number;
  stage2Time?: string;
  userId: number;
}
