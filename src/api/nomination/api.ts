import type { Nomination } from "@/types/nomination";

import { api } from "@/shared/config";

export const fetchNominationList = async () =>
  api.get<Nomination[]>("/nomination/all").then((r) => r.data);
