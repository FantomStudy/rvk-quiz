import { useState } from "react";

import {
  nominationListQuery,
  useNominationList,
} from "@/api/nomination/queries";
import { AsyncSelect, Table } from "@/components/ui";

import { useTheoryList } from "../api/queries";

import styles from "../../statistic.module.css";

export const TheoryStatePage = () => {
  const [nominationId, setNominationId] = useState("");

  const theory = useTheoryList(Number(nominationId));
  const nomination = useNominationList();

  if (theory.isLoading) {
    return <div className="container">Загрузка...</div>;
  }

  if (!theory.data || theory.data.length === 0) {
    return <div className="container">Нет данных для отображения</div>;
  }

  return (
    <div className="container">
      <h1 className={styles.title}>
        Результаты проведения теоретической части:
        <br />
        {nomination.data?.find((n) => n.id === +nominationId)?.name}
      </h1>
      <div className={styles.wrapper}>
        <AsyncSelect
          mapItems={(i) => ({ value: i.id, label: i.name })}
          name="nominationId"
          selectSize="s"
          value={nominationId}
          onChange={(e) => setNominationId(e.target.value)}
          queryOptions={nominationListQuery}
        />

        <Table className={styles.table}>
          <thead>
            <tr>
              <th>Филиал</th>
              <th>Набранный результат</th>
              <th>Место</th>
            </tr>
          </thead>
          <tbody>
            {theory.data.map((data, index) => (
              <tr key={data.branchName}>
                <td>{data.branchName}</td>
                <td>{data.score}</td>
                <td>{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
