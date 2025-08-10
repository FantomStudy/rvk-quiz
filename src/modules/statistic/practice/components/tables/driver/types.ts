export interface DriverData {
  id: number;
  branchId: number;
  finalPlace: number;
  nominationId: number;
  practicePenalty: number;
  practicePlace: number;
  practicePoints: number;
  practiceSum: number;
  practiceTime: "00:00";
  theoryCorrect: number;
  theoryPlace: number;
  theoryPoints: number;
  theoryTime: string;
  totalPoints: number;
  totalPracticePoints: number;
  totalTheoryPoints: number;
  userId: number;
  user: {
    id: number;
    number: string;
    fullName: string;
    branchId: number;
    branch: {
      id: number;
      address: string;
    };
  };
}

export interface DriverMutation {
  practicePenalty: number;
  practiceTime: string;
  // theoryCorrect: number;
  // theoryTime: string;
  userId: number;
}
