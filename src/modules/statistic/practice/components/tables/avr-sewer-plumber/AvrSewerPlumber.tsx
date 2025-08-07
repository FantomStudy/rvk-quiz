import { Table } from "@/components/ui";

import { METRICS } from "./const";

import styles from "../Table.module.css";

export const AvrSewerPlumber = () => {
  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Филиал</th>
          <th rowSpan={2}>ФИО</th>
          <th colSpan={6}>
            Практическое задание &quot;Сборка узла прибора учёта ХВС&quot;
          </th>
          <th rowSpan={2}>Итого</th>
          <th rowSpan={2}>Место</th>
        </tr>
        <tr>
          {Object.entries(METRICS).map(([key, value]) => (
            <th key={key} className={styles.rotate}>
              {value}
            </th>
          ))}
        </tr>
      </thead>
    </Table>
  );
};
