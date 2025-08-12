import { CheckableCell, EditableCell, Table } from "@/components/ui";

import { PlumberHead } from "../PlumberHead";
import { useAvrSewerPlumber, useAvrSewerPlumberSave } from "./queries";

import styles from "../../../../../statistic.module.css";

export const AvrSewerPlumber = () => {
  const { data } = useAvrSewerPlumber();
  const { mutate } = useAvrSewerPlumberSave();

  if (!data) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <PlumberHead title="Сборка раструбного доуплотнителя" />
      <tbody>
        {data.map((row) => (
          <tr key={row.number}>
            <td>{row.branchName}</td>
            <td>{row.participantName}</td>

            <EditableCell
              initialValue={row.time}
              save={(value) => mutate({ ...row, time: value })}
            >
              {row.time}
            </EditableCell>

            <td>{row.timeScore}</td>

            <CheckableCell
              save={(value) =>
                mutate({
                  ...row,
                  hydraulicTest: value,
                })
              }
              initialValue={row.hydraulicTest}
            />

            <EditableCell
              initialValue={row.safetyPenalty.toString()}
              save={(value) => mutate({ ...row, safetyPenalty: Number(value) })}
            >
              {row.safetyPenalty}
            </EditableCell>

            <EditableCell
              save={(value) =>
                mutate({ ...row, culturePenalty: Number(value) })
              }
              initialValue={row.culturePenalty.toString()}
            >
              {row.culturePenalty}
            </EditableCell>

            <EditableCell
              save={(value) =>
                mutate({ ...row, qualityPenalty: Number(value) })
              }
              initialValue={row.qualityPenalty.toString()}
            >
              {row.qualityPenalty}
            </EditableCell>

            <td>{row.stageScore}</td>
            <td>{row.place}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
