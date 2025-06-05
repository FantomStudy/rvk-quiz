const baseKey = "questions";

export const questionKeys = {
  byNomination: (nominationId: number) =>
    [baseKey, "byNomination", nominationId] as const,
  byId: (id: number) => [baseKey, "byId", id] as const,
};
