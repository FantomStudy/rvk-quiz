export const userKeys = {
  all: ["users"] as const,
  detail: (id: number) => ["users", id] as const,
};
