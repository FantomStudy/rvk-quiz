import type { InitTest } from "@/types/test";

import { api } from "@/config";

import type { StartTestResponse } from "../types";

export const startTest = async (form: StartTestResponse) =>
  api.post<InitTest>("/tests/start", form).then((r) => r.data);
