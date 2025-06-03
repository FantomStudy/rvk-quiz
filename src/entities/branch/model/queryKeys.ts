export const branchKeys = {
  all: ["branches"] as const,
  detail: (id: number) => ["branches", id] as const,
};
