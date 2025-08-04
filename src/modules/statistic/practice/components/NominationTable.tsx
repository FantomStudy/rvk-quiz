import { Table } from "@/components/ui";
import type { NominationTask, PracticeListItem } from "../types";
import styles from "../pages/PracticeStatePage.module.css";
import { Fragment } from "react/jsx-runtime";

interface NominationTableProps {
  data: PracticeListItem[];
}

export const NominationTable = ({ data }: NominationTableProps) => {
  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={3}>Филиал</th>
          <th colSpan={9}>Задания</th>
          <th rowSpan={3}>Итого</th>
          <th rowSpan={3}>Место</th>
        </tr>
        <tr>
          <th colSpan={3}>Этап 1</th>
          <th colSpan={3}>Этап 2</th>
          <th colSpan={3}>Этап 3</th>
        </tr>
        <tr>
          {data[0].tasks.map((_, index) => (
            <Fragment key={index}>
              <th className={styles.rotate}>Время</th>
              <th className={styles.rotate}>Балл</th>
              <th className={styles.rotate}>Штраф</th>
            </Fragment>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const tasks = item.tasks as NominationTask[];
          const totalScore = tasks.reduce(
            (sum, task) => sum + task.score - task.penalty,
            0
          );

          return (
            <tr key={item.branchId}>
              <td>{item.branchName}</td>
              {tasks.map((task, taskIndex) => (
                <>
                  <td key={`time-${taskIndex}`}>{task.time}</td>
                  <td key={`score-${taskIndex}`}>{task.score}</td>
                  <td key={`penalty-${taskIndex}`}>{task.penalty}</td>
                </>
              ))}
              <td>{totalScore}</td>
              <td>{index + 1}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
