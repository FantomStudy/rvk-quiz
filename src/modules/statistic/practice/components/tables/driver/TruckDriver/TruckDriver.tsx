import { EditableCell, Table } from "@/components/ui";

import { DriverHead } from "../DriverHead";
import { useTruckDriver, useTruckDriverSave } from "./queries";

import styles from "../../../../../statistic.module.css";

export const TruckDriver = () => {
  const { data } = useTruckDriver();
  const { mutate } = useTruckDriverSave();

  if (!data) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <DriverHead />
      <tbody>
        {data.map(({ user, theory, practice, result, ...row }) => (
          <tr key={row.id}>
            <td>{row.branch.address}</td>
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
            <td>{result.place}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
