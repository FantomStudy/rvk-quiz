export interface DriverData {
  id: number;
  lineNumber: number | null;
  nominationId: number;
  place: number;
  practicNominationId: number;
  branch: {
    id: number;
    address: string;
  };
  practice: {
    penalty: number;
    time: string;
    sum: number;
    place: number;
    points: number;
  };
  result: {
    theoryPoints: number;
    practicePoints: number;
    points: number;
    place: number;
  };
  theory: {
    correct: number;
    time: string;
    points: number;
    place: number;
  };
  user: {
    id: number;
    fullName: string;
  };
}

export interface DriverMutation {
  practicePenalty: number;
  practiceTime: string;
  userId: number;
}
