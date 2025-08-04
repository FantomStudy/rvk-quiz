import { Table } from "@/components/ui";
import styles from "../pages/PracticeStatePage.module.css";
import type { Task, PracticeListItem } from "../types";

interface TasksTableProps {
  data: PracticeListItem[];
}

export const TasksTable = ({ data }: TasksTableProps) => {
  // Получаем названия задач из первого элемента
  const tasks = (data[0]?.tasks as Task[]) || [];

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Филиал</th>
          <th colSpan={tasks.length}>Номинации</th>
          <th rowSpan={2}>Итого</th>
          <th rowSpan={2}>Место</th>
        </tr>
        <tr>
          {tasks.map((task, index) => (
            <th key={index}>{task.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const itemTasks = item.tasks as Task[];
          const totalPoints = itemTasks.reduce(
            (sum, task) => sum + task.points,
            0
          );

          return (
            <tr key={item.branchId}>
              <td>{item.branchName}</td>
              {itemTasks.map((task, taskIndex) => (
                <td key={taskIndex}>{task.points}</td>
              ))}
              <td>{totalPoints}</td>
              <td>{index + 1}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
