export interface DashboardFilters {
  branchId?: string;
  nominationId?: string;
}

export interface DashboardData {
  testResults: DashboardTestResult[];
  blockStats: {
    passedTest: number;
    gpa: number;
    maxScore: number;
  };
}

interface DashboardTestResult {
  branch: string;
  date: string;
  fullName: string;
  nomination: string;
  nominationId: number;
  number: string;
  result: string;
  userId: number;
}

export type BranchStatsResponse = Array<{
  nomination: string;
  branch: string;
  totalScore: number;
}>;
