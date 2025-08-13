import { Fragment } from "react/jsx-runtime";

import { EditableCell, Table } from "@/components/ui";

import { METRICS } from "./const";
import { useWelder, useWelderSave } from "./queries";

import styles from "../../../../statistic.module.css";

export const Welder = () => {
  const { data } = useWelder();
  const { mutate } = useWelderSave();

  if (!data || data.length === 0) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Филиал</th>
          <th rowSpan={2}>ФИО</th>
          {data[0].stages.map((step) => (
            <th key={step.taskNumber} colSpan={5}>
              {step.taskNumber} Этап
            </th>
          ))}
          <th className={styles.rotate} rowSpan={2}>
            Итого баллов за 2 этапа
          </th>
          <th colSpan={3}>Количество снятых баллов по контролю качества</th>
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
          <th>Операционный контроль</th>
          <th>Визуально-измерительный контроль</th>
          <th>Радиографический контроль</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => (
          <tr key={row.branchId}>
            <td>{row.branchName}</td>
            <td>{row.participantName}</td>
            {row.stages.map((stage, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                <EditableCell
                  isTime
                  save={(value) =>
                    mutate({
                      branchId: row.branchId,
                      userId: row.userId,
                      ...stage,
                      time: value,
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
                      branchId: row.branchId,
                      userId: row.userId,
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
                      userId: row.userId,
                      ...stage,
                      safetyPenalty: Number(value),
                    })
                  }
                  initialValue={stage.safetyPenalty.toString()}
                >
                  {stage.safetyPenalty}
                </EditableCell>
                <td>{stage.stageScore}</td>
              </Fragment>
            ))}

            <td>{row.total}</td>

            <td>0</td>
            <td>0</td>
            <td>0</td>

            <td>{row.place}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
