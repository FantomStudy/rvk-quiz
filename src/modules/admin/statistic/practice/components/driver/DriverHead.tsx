import type { SortConfig } from "@/shared/hooks";

import { SortableHeader } from "@/components/ui";

interface DriverHeadProps {
  sortConfig: SortConfig | null;
  onSort: (key: string) => void;
}

export const DriverHead = ({ sortConfig, onSort }: DriverHeadProps) => (
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
      <th rowSpan={2}>Фио</th>
      <th colSpan={4}>Теоретические задания (Знание ПДД)</th>
      <th colSpan={5}>Практические задания (Скоростное маневрирование)</th>
      <th colSpan={4}>Итоговый расчет</th>
    </tr>
    <tr>
      <th>Количество правильных ответов</th>
      <th>Затраченное время</th>
      <th>Занятое место</th>
      <th>Количество очков</th>

      <th>Количество штрафных баллов за ошибки</th>
      <th>Время, затраченное на прохождение дистанции</th>
      <th>Сумма баллов</th>
      <th>Занятое место</th>
      <th>Количество очков</th>

      <th>Количество очков начисленных за соревнования по ПДД</th>
      <th>
        Количество очков, начисленных за соревнования по скоростному
        маневрированию
      </th>
      <th>Общее количество очков</th>
      <SortableHeader onSort={onSort} sortConfig={sortConfig} sortKey="place">
        Итоговое место
      </SortableHeader>
    </tr>
  </thead>
);
