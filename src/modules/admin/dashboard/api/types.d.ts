export interface DashboardData {
  testResults: DashboardTestResult[];
  blockStats: {
    passedTest: number;
    gpa: number;
    maxScore: number;
  };
}

interface DashboardTestResult {
  userId: number;
  number: string;
  fullName: string;
  nominationId: number;
  nomination: string;
  branch: string;
  date: string;
  result: string;
}

export type BranchStatsResponse = Array<{
  nomination: string;
  branch: string;
  totalScore: number;
}>;
