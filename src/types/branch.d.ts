interface BranchBase {
  address: string;
}

export interface Branch extends BranchBase {
  id: number;
}

export type CreateBranch = BranchBase;
