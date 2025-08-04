export interface AddPracticeData {
  branchId: number;
  score: number;
  taskNumber: number;
}

export interface PracticeListItem {
  branchId: number;
  branchName: string;
  tasks: Array<NominationTask | Task>;
}

export interface Task {
  name: string;
  points: number;
}

export interface NominationTask {
  penalty: number;
  score: number;
  time: string;
}
