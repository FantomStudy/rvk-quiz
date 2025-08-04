import { api } from "@/config";

import type { CommonListItem } from "../types";

export const fetchCommonList = async () =>
  api.get<CommonListItem[]>("/statistic/full-table").then((r) => r.data);
