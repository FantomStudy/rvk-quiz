import { METRICS } from "./const";

import styles from "../../../statistic.module.css";

interface PlumberHeadProps {
  title: string;
}

export const PlumberHead = ({ title }: PlumberHeadProps) => (
  <thead>
    <tr>
      <th rowSpan={2}>Филиал</th>
      <th rowSpan={2}>№ линии</th>
      <th rowSpan={2}>ФИО</th>
      <th colSpan={6}>Практическое задание &quot;{title}&quot;</th>
      <th rowSpan={2}>Итого баллов за практические задания</th>
      <th rowSpan={2}>Итого баллов за теоретические задания</th>
      <th rowSpan={2}>Общий балл</th>
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
);
