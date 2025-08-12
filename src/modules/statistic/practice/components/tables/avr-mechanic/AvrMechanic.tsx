import { Fragment } from "react/jsx-runtime";

import { CheckableCell, EditableCell, Table } from "@/components/ui";

import { METRICS } from "./const";
import { useAvrMechanic, useAvrMechanicSave } from "./queries";

import styles from "../../../../statistic.module.css";

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
            {row.stages.map((stage, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                <EditableCell
                  save={(value) =>
                    mutate({
                      branchId: row.branchId,
                      ...stage,
                      time: value,
                    })
                  }
                  initialValue={stage.time}
                >
                  {stage.time}
                </EditableCell>
                <td>{stage.timeScore}</td>
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

                <EditableCell
                  save={(value) =>
                    mutate({
                      branchId: row.branchId,
                      ...stage,
                      safetyPenalty: Number(value),
                    })
                  }
                  initialValue={stage.safetyPenalty.toString()}
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
                  initialValue={stage.culturePenalty.toString()}
                >
                  {stage.culturePenalty}
                </EditableCell>
                <EditableCell
                  save={(value) =>
                    mutate({
                      branchId: row.branchId,
                      ...stage,
                      qualityPenalty: Number(value),
                    })
                  }
                  initialValue={stage.qualityPenalty.toString()}
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
