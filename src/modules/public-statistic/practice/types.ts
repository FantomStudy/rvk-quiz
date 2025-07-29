export interface AddPracticeData {
  branchId: number;
  score: number;
  taskNumber: number;
}

export interface PracticeListItem {
  branchId: number;
  branchName: string;
  tasks: number[];
}
