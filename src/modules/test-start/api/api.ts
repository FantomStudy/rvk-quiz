import { api } from "@/config";

import type { StartTestRequest, StartTestResponse } from "../types";

export const startTest = async (form: StartTestRequest) =>
  api.post<StartTestResponse>("/tests/start", form).then((r) => r.data);
