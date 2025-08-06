import { api } from "@/config";

import type { TheoryListItem } from "../types";

export const fetchTheoryList = async (nominationId: number) =>
  api
    .get<
      TheoryListItem[]
    >("statistic/theory-table", { params: { nominationId } })
    .then((r) => r.data);
