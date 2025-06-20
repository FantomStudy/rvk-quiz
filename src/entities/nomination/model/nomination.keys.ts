const baseKey = "nominations";

export const nominationKeys = {
  list: [baseKey, "list"] as const,
  byId: (id: number) => [baseKey, "byId", id] as const,
};
