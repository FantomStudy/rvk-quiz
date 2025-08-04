import { api } from "@/config";

import type { AddPracticeData, PracticeListItem } from "../types";

export const fetchPracticeList = async (nominationId: number) =>
  api
    .get<
      PracticeListItem[]
    >("/practice-task/table", { params: { nominationId } })
    .then((r) => r.data);

export const addPractice = async (addPracticeData: AddPracticeData) =>
  api
    .post("/practice-task/add-practice-score", addPracticeData)
    .then((r) => r.data);
