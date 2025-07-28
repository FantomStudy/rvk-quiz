import { getSum } from "./utils";

export const TEST_STATISTIC_DATA = [
  {
    branch: "Архангельск",
    maxScore: 100,
    totalScore: 85,
  },
  {
    branch: "Оренбург",
    maxScore: 100,
    totalScore: 90,
  },
  {
    branch: "Липецк",
    maxScore: 100,
    totalScore: 95,
  },
  {
    branch: "Краснодар",
    maxScore: 100,
    totalScore: 93,
  },
  {
    branch: "Воронеж",
    maxScore: 100,
    totalScore: 76,
  },
  {
    branch: "Барнаул",
    maxScore: 100,
    totalScore: 65,
  },
  {
    branch: "Омск",
    maxScore: 100,
    totalScore: 80,
  },
  {
    branch: "Орск",
    maxScore: 100,
    totalScore: 69,
  },
  {
    branch: "Тюмень",
    maxScore: 100,
    totalScore: 78,
  },
  {
    branch: "Тихорецк",
    maxScore: 100,
    totalScore: 84,
  },
  {
    branch: "Южно-Сахалинск",
    maxScore: 100,
    totalScore: 93,
  },
  {
    branch: "Томск",
    maxScore: 100,
    totalScore: 84,
  },
];

export const PRACTICE_STATISTIC_DATA = [
  {
    branch: "Архангельск",
    tasks: [1, 3, 7, 4, 5, 10, 7, 8],
  },
  {
    branch: "Оренбург",
    tasks: [7, 10, 9, 10, 4, 9, 7, 8],
  },
  {
    branch: "Липецк",
    tasks: [10, 2, 9, 10, 4, 6, 7, 8],
  },
  {
    branch: "Краснодар",
    tasks: [2, 2, 9, 10, 4, 6, 0, 8],
  },
  {
    branch: "Воронеж",
    tasks: [7, 2, 9, 4, 4, 6, 4, 8],
  },
  {
    branch: "Барнаул",
    tasks: [7, 2, 9, 10, 4, 2, 7, 8],
  },
  {
    branch: "Омск",
    tasks: [7, 2, 9, 10, 4, 6, 9, 8],
  },
  {
    branch: "Орск",
    tasks: [7, 2, 3, 10, 1, 6, 7, 8],
  },
  {
    branch: "Тюмень",
    tasks: [7, 2, 5, 10, 4, 6, 7, 8],
  },
  {
    branch: "Тихорецк",
    tasks: [7, 2, 9, 10, 4, 6, 3, 8],
  },
  {
    branch: "Южно-Сахалинск",
    tasks: [10, 1, 6, 7, 7, 2, 9, 8],
  },
  {
    branch: "Томск",
    tasks: [7, 4, 6, 7, 8, 2, 9, 10],
  },
];

export const RATING = PRACTICE_STATISTIC_DATA.map(({ branch, tasks }) => {
  const test = TEST_STATISTIC_DATA.find((item) => item.branch === branch);
  return {
    branch,
    practice: getSum(tasks),
    test: test?.totalScore,
    totalScore: getSum(tasks) + test!.totalScore,
  };
}).sort((a, b) => b.totalScore - a.totalScore);
