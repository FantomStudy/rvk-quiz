export interface BranchLineMutation {
  branchId: number;
  lineNumber: number;
  practicNominationId: number;
}

export interface UserLineMutation {
  lineNumber: number;
  practicNominationId: number;
  userId: number;
}
