const baseKey = "users";

export const userKeys = {
  list: [baseKey, "list"] as const,
  byId: (id: number) => [baseKey, "byId", id] as const,
};
