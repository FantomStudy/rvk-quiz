import { Table } from "@/components/ui";
import { api } from "@/config";
import { useMutation, useQuery } from "@tanstack/react-query";
import styles from "../Table.module.css";
import { EditableCell } from "@/components/widgets";

interface Response {
  branchId: number;
  branchName: string;
  participantName: string;
  stage1: {
    taskNumber: number;
    timeSeconds: number;
    timeScore: number;
    culturePenalty: number;
    safetyPenalty: number;
    operationalControl: number;
    visualMeasurement: number;
    radiographicControl: number;
    stageScore: number;
  };
  stage2: {
    taskNumber: number;
    timeSeconds: number;
    timeScore: number;
    culturePenalty: number;
    safetyPenalty: number;
    operationalControl: number;
    visualMeasurement: number;
    radiographicControl: number;
    stageScore: number;
  };
  total: number;
  place: number;
}
interface MutationRequest {
  branchId: number;
  taskNumber: number;
  participantName?: string;
  timeSeconds?: number;
  culturePenalty?: number;
  safetyPenalty?: number;
  operationalControl?: number;
  visualMeasurement?: number;
  radiographicControl?: number;
}

const METRICS = {
  timeSeconds: "Время",
  timeScore: "Баллы за время",
  culturePenalty: "Количество снятых баллов за культуру производства",
  safetyPenalty: "Количество снятых баллов за охрану труда",
  stageScore: "Баллы за этап",
};

const WelderTable = () => {
  const { data } = useQuery({
    queryKey: ["melder"],
    queryFn: () => api.get<Response[]>("/welder/table").then((r) => r.data),
  });
  const { mutate } = useMutation({
    mutationFn: (req: MutationRequest) => api.patch("/welder/update", req),
  });

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th rowSpan={2}>Филиал</th>
          <th rowSpan={2}>ФИО</th>
          <th colSpan={5}>Этап 1</th>
          <th colSpan={5}>Этап 2</th>
          <th rowSpan={2} className={styles.rotate}>
            Итого баллов за 2 этапа
          </th>
          <th colSpan={3}>Количество снятых баллов по контролю качества</th>
          <th rowSpan={2}>Место</th>
        </tr>
        <tr>
          {Object.entries(METRICS).map(([key, value], index) => (
            <th key={index} className={styles.rotate}>
              {value}
            </th>
          ))}
          {Object.entries(METRICS).map(([key, value], index) => (
            <th key={index} className={styles.rotate}>
              {value}
            </th>
          ))}
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

            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  taskNumber: row.stage1.taskNumber,
                  timeSeconds: Number(val),
                  participantName: row.participantName,
                })
              }
              initialValue={row.stage1.timeSeconds.toString()}
            >
              {row.stage1.timeSeconds}
            </EditableCell>
            <td>{row.stage1.timeScore}</td>
            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  taskNumber: row.stage1.taskNumber,
                  culturePenalty: Number(val),
                  participantName: row.participantName,
                })
              }
              initialValue={row.stage1.culturePenalty.toString()}
            >
              {row.stage1.culturePenalty}
            </EditableCell>
            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  taskNumber: row.stage1.taskNumber,
                  participantName: row.participantName,
                  safetyPenalty: Number(val),
                })
              }
              initialValue={row.stage1.safetyPenalty.toString()}
            >
              {row.stage1.safetyPenalty}
            </EditableCell>
            <td>{row.stage1.stageScore}</td>

            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  taskNumber: row.stage2.taskNumber,
                  participantName: row.participantName,
                  timeSeconds: Number(val),
                })
              }
              initialValue={row.stage2.timeSeconds.toString()}
            >
              {row.stage2.timeSeconds}
            </EditableCell>
            <td>{row.stage2.timeScore}</td>
            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  taskNumber: row.stage2.taskNumber,
                  participantName: row.participantName,
                  culturePenalty: Number(val),
                })
              }
              initialValue={row.stage2.culturePenalty.toString()}
            >
              {row.stage2.culturePenalty}
            </EditableCell>
            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  taskNumber: row.stage2.taskNumber,
                  safetyPenalty: Number(val),
                  participantName: row.participantName,
                })
              }
              initialValue={row.stage2.safetyPenalty.toString()}
            >
              {row.stage2.safetyPenalty}
            </EditableCell>
            <td>{row.stage2.stageScore}</td>

            <td>{row.total}</td>

            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  taskNumber: row.stage1.taskNumber,
                  participantName: row.participantName,
                  operationalControl: Number(val),
                })
              }
              initialValue={row.stage1.operationalControl.toString()}
            >
              {row.stage1.operationalControl}
            </EditableCell>
            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  participantName: row.participantName,
                  taskNumber: row.stage1.taskNumber,
                  visualMeasurement: Number(val),
                })
              }
              initialValue={row.stage1.visualMeasurement.toString()}
            >
              {row.stage1.visualMeasurement}
            </EditableCell>
            <EditableCell
              save={(val) =>
                mutate({
                  branchId: row.branchId,
                  participantName: row.participantName,
                  taskNumber: row.stage1.taskNumber,
                  radiographicControl: Number(val),
                })
              }
              initialValue={row.stage1.radiographicControl.toString()}
            >
              {row.stage1.radiographicControl}
            </EditableCell>

            <td>{row.place}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default WelderTable;
