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
  number: string;
  fullName: string;
  nomination: string;
  branch: string;
  date: string;
  result: string;
}
