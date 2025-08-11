import { Fragment } from "react/jsx-runtime";

import { EditableCell, Table } from "@/components/ui";

import { METRICS } from "./const";
import { useChemLabTechnician, useChemLabTechnicianSave } from "./queries";

import styles from "../Table.module.css";

export const ChemLabTechnician = () => {
  const { data } = useChemLabTechnician();
  const { mutate } = useChemLabTechnicianSave();

  if (!data) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={3}>Филиал</th>
          <th rowSpan={3}>ФИО</th>
          <th colSpan={12}>1 Этап</th>
          <th colSpan={6} rowSpan={2}>
            2 Этап
          </th>
          <th rowSpan={3}>Общий балл</th>
          <th rowSpan={3}>Место</th>
        </tr>
        <tr>
          <th colSpan={6}>Предварительный этап</th>
          <th colSpan={6}>Основной этап</th>
        </tr>
        <tr>
          {data[0].stages.map(() =>
            Object.entries(METRICS).map(([key, value]) => (
              <th key={key}>{value}</th>
            ))
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.number}>
            <td>{row.branchName}</td>
            <td>{row.participantName}</td>

            {row.stages.map((stage, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                <EditableCell
                  save={(value) =>
                    mutate({
                      userId: row.userId,
                      [`stage${stage.name}Time`]: value,
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
                      userId: row.userId,
                      [`stage${stage.name}Quality`]: Number(value),
                    })
                  }
                  initialValue={stage.quality.toString()}
                >
                  {stage.quality}
                </EditableCell>

                <EditableCell
                  save={(value) =>
                    mutate({
                      userId: row.userId,
                      [`stage${stage.name}Culture`]: Number(value),
                    })
                  }
                  initialValue={stage.culture.toString()}
                >
                  {stage.culture}
                </EditableCell>

                <EditableCell
                  save={(value) =>
                    mutate({
                      userId: row.userId,
                      [`stage${stage.name}Safety`]: Number(value),
                    })
                  }
                  initialValue={stage.safety.toString()}
                >
                  {stage.quality}
                </EditableCell>

                <td>{stage.total}</td>
              </Fragment>
            ))}

            <td>{row.totalPoints}</td>
            <td>{row.finalPlace}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
