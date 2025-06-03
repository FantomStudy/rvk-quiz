export const nominationKeys = {
  all: ["nominations"] as const,
  detail: (id: number) => ["nominations", id] as const,
};
