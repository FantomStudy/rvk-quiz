import { Fragment } from "react/jsx-runtime";

import { CheckableCell, EditableCell, Table } from "@/components/ui";

import { METRICS } from "./const";
import { useAvrMechanic, useAvrMechanicSave } from "./queries";

import styles from "../Table.module.css";

export const AvrMechanic = () => {
  const { data } = useAvrMechanic();
  const { mutate } = useAvrMechanicSave();

  if (!data) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Филиал</th>
          {data[0].stages.map((step) => (
            <th key={step.taskNumber} colSpan={7}>
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
            {row.stages.map((metric, index) => (
              <Fragment key={index}>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: metric.taskNumber,
                      time: val,
                    })
                  }
                  initialValue={metric.time}
                >
                  {metric.time}
                </EditableCell>
                <td>{metric.timeScore}</td>
                <CheckableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: metric.taskNumber,
                      time: metric.time,
                      hydraulicTest: val,
                    })
                  }
                  initialValue={metric.hydraulicTest}
                />

                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: metric.taskNumber,
                      time: metric.time,
                      safetyPenalty: Number(val),
                    })
                  }
                  initialValue={metric.safetyPenalty.toString()}
                >
                  {metric.safetyPenalty}
                </EditableCell>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: metric.taskNumber,
                      time: metric.time,
                      culturePenalty: Number(val),
                    })
                  }
                  initialValue={metric.culturePenalty.toString()}
                >
                  {metric.culturePenalty}
                </EditableCell>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: metric.taskNumber,
                      time: metric.time,
                      qualityPenalty: Number(val),
                    })
                  }
                  initialValue={metric.qualityPenalty.toString()}
                >
                  {metric.qualityPenalty}
                </EditableCell>
                <td>{metric.stageScore}</td>
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
