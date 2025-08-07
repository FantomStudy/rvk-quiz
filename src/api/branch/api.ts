import type { Branch } from "@/types/branch";

import { api } from "@/shared/config";

export const fetchBranchList = async () =>
  api.get<Branch[]>("/branch/all").then((r) => r.data);
