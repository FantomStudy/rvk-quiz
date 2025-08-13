import { Fragment } from "react";

import { CheckableCell, EditableCell, Table } from "@/components/ui";

import { METRICS } from "./const";
import { useAvrSewer, useAvrSewerSave } from "./queries";

import styles from "../../../../statistic.module.css";

export const AvrSewer = () => {
  const { data } = useAvrSewer();
  const { mutate } = useAvrSewerSave();

  if (!data || data.length === 0) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Филиал</th>
          {data[0].stages.map((step) => (
            <th key={step.taskNumber} colSpan={6}>
              {step.taskNumber} Этап
            </th>
          ))}
          <th rowSpan={2}>Итого</th>
          <th rowSpan={2}>Место</th>
        </tr>
        <tr>
          {data[0].stages.map(() =>
            Object.entries(METRICS).map(([key, value]) => (
              <th key={key} className={styles.rotate}>
                {value}
              </th>
            )),
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.branchId}>
            <td>{row.branchName}</td>
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

            <td>{row.total}</td>
            <td>{row.place}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
