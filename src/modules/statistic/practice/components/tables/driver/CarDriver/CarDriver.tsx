import { EditableCell, Table } from "@/components/ui";

import { DriverHead } from "../DriverHead";
import { useCarDriver, useCarDriverSave } from "./queries";

import styles from "../../Table.module.css";

export const CarDriver = () => {
  const { data } = useCarDriver();
  const { mutate } = useCarDriverSave();

  if (!data) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <DriverHead />
      <tbody>
        {data.map((row) => (
          <tr key={row.branchId}>
            <td>{row.user.branch.address}</td>
            <td>{row.user.fullName}</td>

            <td>{row.theoryCorrect}</td>
            <td>{row.theoryTime}</td>
            <td>{row.theoryPlace}</td>
            <td>{row.theoryPoints}</td>

            <EditableCell
              save={(value) =>
                mutate({
                  userId: row.userId,
                  practiceTime: row.practiceTime,
                  practicePenalty: Number(value),
                })
              }
              initialValue={row.practicePenalty.toString()}
            >
              {row.practicePenalty}
            </EditableCell>
            <EditableCell
              save={(value) =>
                mutate({
                  userId: row.userId,
                  practiceTime: value,
                  practicePenalty: row.practicePenalty,
                })
              }
              initialValue={row.practiceTime}
            >
              {row.practiceTime}
            </EditableCell>
            <td>{row.practiceSum}</td>
            <td>{row.practicePlace}</td>
            <td>{row.practicePoints}</td>

            <td>{row.totalTheoryPoints}</td>
            <td>{row.totalPracticePoints}</td>
            <td>{row.totalPoints}</td>
            <td>{row.finalPlace}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
