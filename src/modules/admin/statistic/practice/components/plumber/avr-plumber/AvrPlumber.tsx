import { CheckableCell, EditableCell, Table } from "@/components/ui";
import { sortWithEmptyLast } from "@/shared/utils";

import type { SortProps } from "../../../types";

import { useUserLineSave } from "../../../api/queries";
import { PlumberHead } from "../PlumberHead";
import { useAvrPlumber, useAvrPlumberSave } from "./queries";

import styles from "../../../../statistic.module.css";

export const AvrPlumber = ({ sortBy }: SortProps) => {
  const { data } = useAvrPlumber();
  const { mutate } = useAvrPlumberSave();
  const line = useUserLineSave();

  if (!data || data.length === 0) return "Не удалось загрузить данные";

  const sortedData = sortWithEmptyLast(data, sortBy);

  return (
    <Table className={styles.table}>
      <PlumberHead title="Сборка узла прибора учёта ХВС" />
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.number}>
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

            <EditableCell
              isTime
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
