import { Fragment } from "react/jsx-runtime";

import { EditableCell, SortableHeader, Table } from "@/components/ui";
import { useTableSort } from "@/shared/hooks";

import { useUserLineSave } from "../../api/queries";
import { METRICS } from "./const";
import { useWelder, useWelderSave } from "./queries";

import styles from "../../../statistic.module.css";

export const Welder = () => {
  const { data } = useWelder();
  const { mutate } = useWelderSave();
  const line = useUserLineSave();

  const { sortedData, sortConfig, handleSort } = useTableSort(data || []);

  if (!data || data.length === 0) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Филиал</th>
          <SortableHeader
            onSort={handleSort}
            rowSpan={2}
            sortConfig={sortConfig}
            sortKey="lineNumber"
          >
            № линии
          </SortableHeader>
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
          <th rowSpan={2}>Итого баллов за практическое задание</th>
          <th rowSpan={2}>Итого баллов за теоритические задания</th>
          <th rowSpan={2}>Общий балл</th>
          <SortableHeader
            onSort={handleSort}
            rowSpan={2}
            sortConfig={sortConfig}
            sortKey="place"
          >
            Место
          </SortableHeader>
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
        {sortedData?.map((row) => (
          <tr key={row.branchId}>
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

            <EditableCell
              save={(value) =>
                mutate({
                  branchId: row.branchId,
                  userId: row.userId,
                  ...row.stages[0],
                  operationalControl: Number(value),
                })
              }
              initialValue={`${row.stages[0].operationalControl}`}
            >
              {row.stages[0].operationalControl}
            </EditableCell>
            <EditableCell
              save={(value) =>
                mutate({
                  branchId: row.branchId,
                  userId: row.userId,
                  ...row.stages[0],
                  visualMeasurement: Number(value),
                })
              }
              initialValue={`${row.stages[0].visualMeasurement}`}
            >
              {row.stages[0].visualMeasurement}
            </EditableCell>
            <EditableCell
              save={(value) =>
                mutate({
                  branchId: row.branchId,
                  userId: row.userId,
                  ...row.stages[0],
                  radiographicControl: Number(value),
                })
              }
              initialValue={`${row.stages[0].radiographicControl}`}
            >
              {row.stages[0].radiographicControl}
            </EditableCell>

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
