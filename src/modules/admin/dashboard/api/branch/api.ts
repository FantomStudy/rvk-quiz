import { api } from "@/config";

import type { Branch } from "./types";

export const fetchBranchList = async () =>
  api.get<Branch[]>("/branch/all").then((r) => r.data);
