import { Fragment } from "react";

import { CheckableCell, EditableCell, Table } from "@/components/ui";
import { sortWithEmptyLast } from "@/shared/utils";

import type { SortProps } from "../../types";

import { useBranchLineSave } from "../../api/queries";
import { METRICS } from "./const";
import { useAvrSewer, useAvrSewerSave } from "./queries";

import styles from "../../../statistic.module.css";

export const AvrSewer = ({ sortBy }: SortProps) => {
  const { data } = useAvrSewer();
  const { mutate } = useAvrSewerSave();
  const line = useBranchLineSave();

  if (!data || data.length === 0) return "Не удалось загрузить данные";

  const sortedData = sortWithEmptyLast(data, sortBy);

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.printNotRotate} rowSpan={2}>
            Филиал
          </th>
          <th rowSpan={2}>№ линии</th>

          <th className={styles.printNotRotate} colSpan={6}>
            1 Этап &quot;Набивка полок и лотка&quot;
          </th>
          <th className={styles.printNotRotate} colSpan={6}>
            2 Этап &quot;Установка пневматического заглушаещего устройства
            ПЗУ-1&quot;
          </th>
          <th className={styles.printNotRotate} colSpan={6}>
            3 Этап &quot;Регулировка высотного положения горловины колодца&quot;
          </th>
          <th className={styles.printNotRotate} colSpan={6}>
            4 Этап &quot;Поиск люка под грунтом&quot;
          </th>

          <th rowSpan={2}>Итого баллов за практические задания</th>
          <th rowSpan={2}>Итого баллов за теоретические задания</th>
          <th rowSpan={2}>Общий балл</th>
          <th rowSpan={2}>Место</th>
        </tr>
        <tr>
          {data[0].stages.map((_, index) =>
            Object.entries(METRICS).map(([key, value]) => (
              <th key={key} className={styles.rotate}>
                {index === 1 && key === "safetyPenalty"
                  ? "Гидравлические испытания (+/-)"
                  : value}
                {}
              </th>
            ))
          )}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.branchId}>
            <td>{row.branchName}</td>
            <EditableCell
              save={(value) =>
                line.mutate({
                  branchId: row.branchId,
                  practicNominationId: row.practicNominationId,
                  lineNumber: Number(value),
                })
              }
              initialValue={row.lineNumber?.toString() || ""}
            >
              {row.lineNumber}
            </EditableCell>
            {row.stages.map((stage) => (
              <Fragment key={stage.taskNumber}>
                <EditableCell
                  isTime
                  save={(value) =>
                    mutate({
                      branchId: row.branchId,
                      ...stage,
                      time: value,
                    })
                  }
                  initialValue={stage.time}
                >
                  {stage.timeDisplay}
                </EditableCell>

                <td>{stage.timeScore}</td>

                {stage.taskNumber === 2 && (
                  <CheckableCell
                    save={(value) =>
                      mutate({
                        branchId: row.branchId,
                        ...stage,
                        hydraulicTest: value,
                      })
                    }
                    initialValue={stage.hydraulicTest}
                  />
                )}

                <EditableCell
                  save={(value) =>
                    mutate({
                      branchId: row.branchId,
                      ...stage,
                      safetyPenalty: Number(value),
                    })
                  }
                  initialValue={String(stage.safetyPenalty)}
                >
                  {stage.safetyPenalty}
                </EditableCell>

                <EditableCell
                  save={(value) =>
                    mutate({
                      branchId: row.branchId,
                      ...stage,
                      culturePenalty: Number(value),
                    })
                  }
                  initialValue={String(stage.culturePenalty)}
                >
                  {stage.culturePenalty}
                </EditableCell>

                {stage.taskNumber !== 2 && (
                  <EditableCell
                    save={(value) =>
                      mutate({
                        branchId: row.branchId,
                        ...stage,
                        qualityPenalty: Number(value),
                      })
                    }
                    initialValue={String(stage.qualityPenalty)}
                  >
                    {stage.qualityPenalty}
                  </EditableCell>
                )}

                <td>{stage.stageScore}</td>
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
