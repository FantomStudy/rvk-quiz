const baseKey = "branches";

export const branchKeys = {
  list: [baseKey, "list"] as const,
  byId: (id: number) => [baseKey, "byId", id] as const,
};
