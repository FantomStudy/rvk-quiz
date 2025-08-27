import { EditableCell, Table } from "@/components/ui";
import { sortWithEmptyLast } from "@/shared/utils";

import type { SortProps } from "../../../types";

import { useUserLineSave } from "../../../api/queries";
import { DriverHead } from "../DriverHead";
import { useCarDriver, useCarDriverSave } from "./queries";

import styles from "../../../../statistic.module.css";

export const CarDriver = ({ sortBy }: SortProps) => {
  const { data } = useCarDriver();
  const { mutate } = useCarDriverSave();
  const line = useUserLineSave();

  if (!data || data.length === 0) return "Не удалось загрузить данные";

  const sortedData = sortWithEmptyLast(data, sortBy);

  return (
    <>
      <Table className={styles.table}>
        <DriverHead />
        <tbody>
          {sortedData.map(({ user, theory, practice, result, ...row }) => (
            <tr key={row.id}>
              <td>{row.branch.address}</td>
              <EditableCell
                save={(value) =>
                  line.mutate({
                    lineNumber: Number(value),
                    userId: user.id,
                    practicNominationId: row.practicNominationId,
                  })
                }
                initialValue={row.lineNumber?.toString() || ""}
              >
                {row.lineNumber}
              </EditableCell>
              <td>{user.fullName}</td>

              <td>{theory.correct}</td>
              <td>{theory.time}</td>
              <td>{theory.place}</td>
              <td>{theory.points}</td>

              <EditableCell
                save={(value) =>
                  mutate({
                    userId: user.id,
                    practiceTime: practice.time,
                    practicePenalty: Number(value),
                  })
                }
                initialValue={practice.penalty.toString()}
              >
                {practice.penalty}
              </EditableCell>

              <EditableCell
                isTime
                save={(value) =>
                  mutate({
                    userId: user.id,
                    practicePenalty: practice.penalty,
                    practiceTime: value,
                  })
                }
                initialValue={practice.time}
              >
                {practice.time}
              </EditableCell>

              <td>{practice.sum}</td>
              <td>{practice.place}</td>
              <td>{practice.points}</td>

              <td>{result.theoryPoints}</td>
              <td>{result.practicePoints}</td>
              <td>{result.points}</td>
              <td>{row.place}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p style={{ fontSize: 8, margin: "15px 0" }}>
        При условии равного количества итоговых баллов конкурсной комиссией
        принято решение комплексно оценить участников по всем результатам
        соревнований с приоритетом на практическую часть (штрафные баллы, время,
        затраченное на прохождение дистанции)
      </p>
    </>
  );
};
