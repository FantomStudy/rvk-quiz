import { Fragment } from "react/jsx-runtime";

import {
  CheckableCell,
  EditableCell,
  SortableHeader,
  Table,
} from "@/components/ui";
import { useTableSort } from "@/shared/hooks";

import { useBranchLineSave } from "../../api/queries";
import { METRICS } from "./const";
import { useAvrMechanic, useAvrMechanicSave } from "./queries";

import styles from "../../../statistic.module.css";

export const AvrMechanic = () => {
  const { data } = useAvrMechanic();
  const { mutate } = useAvrMechanicSave();
  const line = useBranchLineSave();

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

          <th colSpan={7}>1 Этап &quot;Сборка узла&quot; </th>
          <th colSpan={7}>
            2 Этап &quot;Сварка поворотного и неповоротного стыков&quot;{" "}
          </th>
          <th colSpan={7}>
            3 Этап &quot;Ликвидация повреждения в грунте&quot;
          </th>

          <th rowSpan={2}>Итого баллов за практические задания</th>
          <th rowSpan={2}>Итого баллов за теоретические задания</th>
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
            )),
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
                  lineNumber: Number(value),
                  practicNominationId: row.practicNominationId,
                })
              }
              initialValue={row.lineNumber?.toString() || ""}
            >
              {row.lineNumber}
            </EditableCell>
            {row.stages.map((stage, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
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
