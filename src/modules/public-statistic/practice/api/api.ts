import { api } from "@/config";

import type { AddPracticeData, PracticeListItem } from "../types";

export const fetchPracticeList = async () =>
  api
    .get<PracticeListItem[]>("/practice-task/all-branches")
    .then((r) => r.data);

export const addPractice = async (addPracticeData: AddPracticeData) =>
  api
    .post("/practice-task/add-practice-score", addPracticeData)
    .then((r) => r.data);
