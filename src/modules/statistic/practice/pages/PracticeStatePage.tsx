import { useState } from "react";

import { nominationListQuery } from "@/api/nomination/queries";
import { AsyncSelect } from "@/components/ui";

import { usePracticeList } from "../api/queries";
import { NominationTable, TasksTable } from "../components";
import { isNominationTaskArray, isTaskArray } from "../utils";

import styles from "./PracticeStatePage.module.css";

export const PracticeStatePage = () => {
  const [nominationId, setNominationId] = useState("");
  const { data, isLoading } = usePracticeList(Number(nominationId));

  if (isLoading) {
    return <div className="container">Загрузка...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="container">Нет данных для отображения</div>;
  }

  // Определяем тип таблицы на основе первого элемента данных
  const firstItem = data[0];
  const isNominationTasksType =
    firstItem?.tasks && isNominationTaskArray(firstItem.tasks);
  const isTasksType = firstItem?.tasks && isTaskArray(firstItem.tasks);

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <AsyncSelect
          mapItems={(i) => ({ value: i.id, label: i.name })}
          name="nominationId"
          selectSize="s"
          value={nominationId}
          onChange={(e) => setNominationId(e.target.value)}
          queryOptions={nominationListQuery}
        />

        {isNominationTasksType && <NominationTable data={data} />}

        {isTasksType && <TasksTable data={data} />}

        {!isNominationTasksType && !isTasksType && (
          <div>Неподдерживаемый тип данных</div>
        )}
      </div>
    </div>
  );
};
