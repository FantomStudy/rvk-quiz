import { Fragment } from "react/jsx-runtime";

import { EditableCell, Table } from "@/components/ui";

import { METRICS } from "./const";
import { useWelder, useWelderSave } from "./queries";

import styles from "../Table.module.css";

export const Welder = () => {
  const { data } = useWelder();
  const { mutate } = useWelderSave();

  if (!data) return "Не удалось загрузить данные";

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
            ))
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
            {row.stages.map((metric, index) => (
              <Fragment key={index}>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: metric.taskNumber,
                      participantName: row.participantName,
                      time: val,
                    })
                  }
                  initialValue={metric.time}
                >
                  {metric.time}
                </EditableCell>
                <td>{metric.timeScore}</td>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: row.branchId,
                      taskNumber: metric.taskNumber,
                      participantName: row.participantName,
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
                      participantName: row.participantName,
                      time: metric.time,
                      safetyPenalty: Number(val),
                    })
                  }
                  initialValue={metric.safetyPenalty.toString()}
                >
                  {metric.safetyPenalty}
                </EditableCell>
                <td>{metric.stageScore}</td>
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
