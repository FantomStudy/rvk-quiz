import { api } from "@/config";

import type { theoryListItem } from "../types";

export const fetchTheoryList = async (nominationId: number) =>
  api
    .get<
      theoryListItem[]
    >("statistic/theory-table", { params: { nominationId } })
    .then((r) => r.data);
