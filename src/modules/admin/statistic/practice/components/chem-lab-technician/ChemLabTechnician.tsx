import { Fragment } from "react/jsx-runtime";

import { CheckableCell, EditableCell, Table } from "@/components/ui";
import { sortWithEmptyLast } from "@/shared/utils";

import type { SortProps } from "../../types";

import { useUserLineSave } from "../../api/queries";
import { METRICS } from "./const";
import { useChemLabTechnician, useChemLabTechnicianSave } from "./queries";

import styles from "../../../statistic.module.css";

export const ChemLabTechnician = ({ sortBy }: SortProps) => {
  const { data } = useChemLabTechnician();
  const { mutate } = useChemLabTechnicianSave();
  const line = useUserLineSave();

  if (!data || data.length === 0) return "Не удалось загрузить данные";

  const normalizeData = data.map((el) => ({ ...el }));

  const sortedData = sortWithEmptyLast(normalizeData, sortBy);

  return (
    <Table className={`${styles.table} ${styles.chemPrint}`}>
      <thead>
        <tr>
          <th className={styles.printNotRotate} rowSpan={3}>
            Филиал
          </th>
          <th rowSpan={3}>№ линии</th>

          <th className={styles.printNotRotate} rowSpan={3}>
            ФИО
          </th>
          <th className={styles.printNotRotate} colSpan={13}>
            1 Этап &quot;Определение остаточного хлора в пробе питьевой
            воды&quot;
          </th>
          <th className={styles.printNotRotate} colSpan={6} rowSpan={2}>
            2 Этап &quot;Отбор проб для микробиологического анализа в
            соответствии с требованиями&quot;
          </th>
          <th rowSpan={3}>Итого баллов за практические задания</th>
          <th rowSpan={3}>Итого баллов за теоретические задания</th>
          <th rowSpan={3}>Общий балл</th>
          <th rowSpan={3}>Место</th>
        </tr>
        <tr>
          <th className={styles.printNotRotate} colSpan={6}>
            1a Предварительный этап. Калибровка пипеток
          </th>
          <th className={styles.printNotRotate} colSpan={7}>
            1б Основной этап определения остаточного активного (общего) хлора
          </th>
        </tr>
        <tr>
          {data[0].stages.map((_, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                {Object.entries(METRICS).map(([key, value]) => (
                  <th key={key}>{value}</th>
                ))}
                {index === 1 && <th>Бонусный балл</th>}
              </Fragment>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.number}>
            <td>{row.branchName}</td>
            <EditableCell
              save={(value) =>
                line.mutate({
                  lineNumber: Number(value),
                  userId: row.userId,
                  practicNominationId: row.practicNominationId,
                })
              }
              initialValue={row.lineNumber?.toString() || ""}
            >
              {row.lineNumber}
            </EditableCell>
            <td>{row.participantName}</td>

            {row.stages.map((stage, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                <EditableCell
                  isTime
                  save={(value) =>
                    mutate({
                      userId: row.userId,
                      [`stage${stage.name}Time`]: value,
                    })
                  }
                  initialValue={stage.time}
                >
                  {stage.time}
                </EditableCell>

                <td>{stage.timeScore}</td>

                <EditableCell
                  save={(value) =>
                    mutate({
                      userId: row.userId,
                      [`stage${stage.name}Quality`]: Number(value),
                    })
                  }
                  initialValue={stage.quality.toString()}
                >
                  {stage.quality}
                </EditableCell>

                <EditableCell
                  save={(value) =>
                    mutate({
                      userId: row.userId,
                      [`stage${stage.name}Culture`]: Number(value),
                    })
                  }
                  initialValue={stage.culture.toString()}
                >
                  {stage.culture}
                </EditableCell>

                <EditableCell
                  save={(value) =>
                    mutate({
                      userId: row.userId,
                      [`stage${stage.name}Safety`]: Number(value),
                    })
                  }
                  initialValue={stage.safety.toString()}
                >
                  {stage.quality}
                </EditableCell>

                <td>{stage.total}</td>

                {stage.name === "1b" && stage.isBest !== undefined && (
                  <CheckableCell
                    save={(value) =>
                      mutate({
                        userId: row.userId,
                        isBest: value,
                      })
                    }
                    initialValue={stage.isBest}
                  />
                )}
              </Fragment>
            ))}

            <td>{row.practiceScore}</td>
            <td>{row.theoryScore}</td>
            <td>{row.total}</td>
            <td>{row.place}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
