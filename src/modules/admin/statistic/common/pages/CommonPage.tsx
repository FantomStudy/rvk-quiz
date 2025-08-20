import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { Select, Table } from "@/components/ui";
import { api } from "@/shared/config";

import type { BranchResult, ResultName, UserResult } from "./types";

import { FINAL_RESULTS, STORAGE_KEY } from "./const";

import styles from "../../statistic.module.css";

export const CommonPage = () => {
  const [selected, setSelected] = useState<ResultName>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (saved as ResultName) : "avrMechanic";
  });

  const current = FINAL_RESULTS[selected];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, selected);
  }, [selected]);

  const { data } = useQuery({
    queryKey: [current.path],
    queryFn: async () =>
      api
        .get<(BranchResult & UserResult)[]>(`/${current.path}/result-table`)
        .then((r) => r.data),
  });

  if (!data) return "Не удалось загрузить данные";

  return (
    <div className="container">
      <p className={styles.title}>{FINAL_RESULTS[selected].name}</p>
      <div className={styles.wrapper}>
        <Select
          selectSize="s"
          value={selected}
          onChange={(e) => setSelected(e.target.value as ResultName)}
        >
          {Object.entries(FINAL_RESULTS).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name}
            </option>
          ))}
        </Select>

        <Table className={styles.table}>
          <thead>
            <tr>
              <th>Филиал</th>
              {current.type ? <th>Состав бригады</th> : <th>ФИО</th>}
              <th>Теоретические задания</th>
              <th>Практические задания</th>
              <th>Общий балл</th>
              <th>Место</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              console.log(row);

              return (
                <tr key={row.branchName}>
                  <td>{row.branchName}</td>
                  {current.type ? (
                    <td>
                      <div className={styles.branchWrapper}>
                        {row.team.map((name) => (
                          <p key={name}>{name}</p>
                        ))}
                      </div>
                    </td>
                  ) : (
                    <td>{row.fullName.fullName}</td>
                  )}
                  <td>{row.theoryScore}</td>
                  <td>{row.practiceScore}</td>
                  <td>{row.totalScore}</td>
                  <td>{row.place}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
