import { Table } from "@/components/ui";

import { METRICS } from "./const";

import styles from "../Table.module.css";

export const ChemLabTechnician = () => {
  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={3}>Филиал</th>
          <th colSpan={12}>1 Этап</th>
          <th colSpan={6} rowSpan={2}>
            2 Этап
          </th>
          <th rowSpan={3}>Общий балл</th>
          <th rowSpan={3}>Место</th>
        </tr>
        <tr>
          <th colSpan={6}>Предварительный этап</th>
          <th colSpan={6}>Основной этап</th>
        </tr>
        <tr>
          {Object.entries(METRICS).map(([key, value]) => (
            <th key={key}>{value}</th>
          ))}
          {Object.entries(METRICS).map(([key, value]) => (
            <th key={key}>{value}</th>
          ))}
          {Object.entries(METRICS).map(([key, value]) => (
            <th key={key}>{value}</th>
          ))}
        </tr>
      </thead>
    </Table>
  );
};
