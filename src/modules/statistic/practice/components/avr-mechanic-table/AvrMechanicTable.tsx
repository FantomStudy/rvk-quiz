import { useMutation, useQuery } from "@tanstack/react-query";
import { Fragment } from "react/jsx-runtime";

import { Table } from "@/components/ui";
import { api } from "@/config";

import styles from "../Table.module.css";
import { EditableCell } from "@/components/widgets";
interface Response {
  branchId: number;
  branchName: string;
  place: number;
  total: number;
  stages: [
    {
      taskNumber: number;
      timeSeconds: number;
      timeScore: number;
      hydraulicTest: boolean;
      safetyPenalty: number;
      culturePenalty: number;
      qualityPenalty: number;
      stageScore: number;
    },
  ];
}

interface MutateRequest {
  branchId: number;
  culturePenalty?: number;
  hydraulicTest?: boolean;
  nominationId?: number;
  qualityPenalty?: number;
  safetyPenalty?: number;
  taskNumber: number;
  timeScore?: number;
  timeSeconds?: number;
}

const METRICS = {
  timeSeconds: "Время",
  timeScore: "Баллы за время",
  hydraulicTest: "Гидравлические испытания",
  safetyPenalty: "Количество снятых баллов по охране труда",
  culturePenalty: "Количество снятых баллов за культуру производства",
  qualityPenalty: "Количество снятых баллов за качество",
  stageScore: "Баллы за этап",
};

const AvrMechanicTable = () => {
  const { data } = useQuery({
    queryKey: ["avr-mechanic"],
    queryFn: () =>
      api.get<Response[]>("/avr-mechanic/table").then((r) => r.data),
  });

  const { mutate } = useMutation({
    mutationFn: async (req: MutateRequest) =>
      api.patch("/avr-mechanic/upsert", req),
  });

  if (!data) return "Не удалось загрузить данные";

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Филиал</th>
          {data[0].stages.map((task) => (
            <th key={task.taskNumber} colSpan={7}>
              {task.taskNumber} Этап
            </th>
          ))}
          <th rowSpan={2}>Итого</th>
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
        </tr>
      </thead>

      <tbody>
        {data.map((r) => (
          <tr key={r.branchId}>
            <td>{r.branchName}</td>
            {r.stages.map((metrics, index) => (
              <Fragment key={index}>
                <EditableCell
                  save={(time) =>
                    mutate({
                      branchId: r.branchId,
                      taskNumber: metrics.taskNumber,
                      timeScore: 30,
                      timeSeconds: Number(time),
                    })
                  }
                  initialValue={metrics.timeSeconds.toString()}
                >
                  {metrics.timeSeconds}
                </EditableCell>
                <td>{metrics.timeScore}</td>
                <td>{metrics.hydraulicTest ? "+" : "-"}</td>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: r.branchId,
                      taskNumber: metrics.taskNumber,
                      timeScore: 30,
                      safetyPenalty: Number(val),
                    })
                  }
                  initialValue={metrics.safetyPenalty.toString()}
                >
                  {metrics.safetyPenalty}
                </EditableCell>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: r.branchId,
                      taskNumber: metrics.taskNumber,
                      timeScore: 30,
                      culturePenalty: Number(val),
                    })
                  }
                  initialValue={metrics.culturePenalty.toString()}
                >
                  {metrics.culturePenalty}
                </EditableCell>
                <EditableCell
                  save={(val) =>
                    mutate({
                      branchId: r.branchId,
                      taskNumber: metrics.taskNumber,
                      timeScore: 30,
                      qualityPenalty: Number(val),
                    })
                  }
                  initialValue={metrics.qualityPenalty.toString()}
                >
                  {metrics.qualityPenalty}
                </EditableCell>
                <td>{metrics.stageScore}</td>
              </Fragment>
            ))}
            <td>{r.total}</td>
            <td>{r.place}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AvrMechanicTable;
