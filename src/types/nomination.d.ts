interface NominationBase {
  name: string;
  duration: string;
  questionsCount: number;
}

export interface Nomination extends NominationBase {
  id: number;
  allCount: number;
}

export type CreateNomination = NominationBase;
