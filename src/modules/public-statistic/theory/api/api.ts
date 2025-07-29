import { api } from "@/config";

import type { theoryListItem } from "../types";

export const fetchTheoryList = async () =>
  api.get<theoryListItem[]>("statistic/theory-table").then((r) => r.data);
