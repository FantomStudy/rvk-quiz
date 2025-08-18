import type { SortConfig } from "@/shared/hooks";

import { SortableHeader } from "@/components/ui";

import { METRICS } from "./const";

import styles from "../../../statistic.module.css";

interface PlumberHeadProps {
  sortConfig: SortConfig | null;
  title: string;
  onSort: (key: string) => void;
}

export const PlumberHead = ({
  title,
  sortConfig,
  onSort,
}: PlumberHeadProps) => (
  <thead>
    <tr>
      <th rowSpan={2}>Филиал</th>
      <SortableHeader
        onSort={onSort}
        rowSpan={2}
        sortConfig={sortConfig}
        sortKey="lineNumber"
      >
        № линии
      </SortableHeader>
      <th rowSpan={2}>ФИО</th>
      <th colSpan={6}>Практическое задание &quot;{title}&quot;</th>
      <th rowSpan={2}>Итого баллов за практические задания</th>
      <th rowSpan={2}>Итого баллов за теоретические задания</th>
      <th rowSpan={2}>Общий балл</th>
      <SortableHeader
        onSort={onSort}
        rowSpan={2}
        sortConfig={sortConfig}
        sortKey="place"
      >
        Место
      </SortableHeader>
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
