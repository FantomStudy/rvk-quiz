import { Fragment } from "react";

import { EditableCell, Table } from "@/components/ui";

import { METRICS } from "./const";
import { useAvrSewer, useAvrSewerSave } from "./queries";

import styles from "../Table.module.css";

export const AvrSewer = () => {
  const { data } = useAvrSewer();
  const { mutate } = useAvrSewerSave();

  if (!data) return "Не удалось загрузить данные";

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
            ))
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
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: stage.taskNumber,
                      time: val,
                      hydraulicTest: stage.hydraulicTest,
                      safetyPenalty: stage.safetyPenalty,
                      culturePenalty: stage.culturePenalty,
                      qualityPenalty: stage.qualityPenalty,
                    })
                  }
                  initialValue={stage.time}
                >
                  {stage.timeDisplay}
                </EditableCell>
                <td>{stage.timeScore}</td>
                {/* <CheckableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: stage.taskNumber,
                      time: stage.time,
                      hydraulicTest: val,
                      safetyPenalty: stage.safetyPenalty,
                      culturePenalty: stage.culturePenalty,
                      qualityPenalty: stage.qualityPenalty,
                    })
                  }
                  initialValue={stage.hydraulicTest}
                /> */}
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: stage.taskNumber,
                      time: stage.time,
                      hydraulicTest: stage.hydraulicTest,
                      safetyPenalty: Number(val),
                      culturePenalty: stage.culturePenalty,
                      qualityPenalty: stage.qualityPenalty,
                    })
                  }
                  initialValue={String(stage.safetyPenalty)}
                >
                  {stage.safetyPenalty}
                </EditableCell>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: stage.taskNumber,
                      time: stage.time,
                      hydraulicTest: stage.hydraulicTest,
                      safetyPenalty: stage.safetyPenalty,
                      culturePenalty: Number(val),
                      qualityPenalty: stage.qualityPenalty,
                    })
                  }
                  initialValue={String(stage.culturePenalty)}
                >
                  {stage.culturePenalty}
                </EditableCell>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: stage.taskNumber,
                      time: stage.time,
                      hydraulicTest: stage.hydraulicTest,
                      safetyPenalty: stage.safetyPenalty,
                      culturePenalty: stage.culturePenalty,
                      qualityPenalty: Number(val),
                    })
                  }
                  initialValue={String(stage.qualityPenalty)}
                >
                  {stage.qualityPenalty}
                </EditableCell>
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
