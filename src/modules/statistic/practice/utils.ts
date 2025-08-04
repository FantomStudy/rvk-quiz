import type { NominationTask, Task } from "./types";

/**
 * Type guard для проверки, является ли массив тасков массивом NominationTask
 */
export const isNominationTaskArray = (
  tasks: Array<NominationTask | Task>
): tasks is NominationTask[] => {
  if (tasks.length === 0) return false;

  // Проверяем все элементы массива на наличие свойств NominationTask
  return tasks.every(
    (task): task is NominationTask =>
      typeof task === "object" &&
      task !== null &&
      "penalty" in task &&
      "score" in task &&
      "time" in task &&
      typeof task.penalty === "number" &&
      typeof task.score === "number" &&
      typeof task.time === "string"
  );
};

/**
 * Type guard для проверки, является ли массив тасков массивом Task
 */
export const isTaskArray = (
  tasks: Array<NominationTask | Task>
): tasks is Task[] => {
  if (tasks.length === 0) return false;

  // Проверяем все элементы массива на наличие свойств Task
  return tasks.every(
    (task): task is Task =>
      typeof task === "object" &&
      task !== null &&
      "name" in task &&
      "points" in task &&
      typeof task.name === "string" &&
      typeof task.points === "number"
  );
};
