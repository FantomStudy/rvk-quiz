import { EditableCell } from "@/components";
import { Table } from "@/components/ui";

import { getSum } from "../../utils";
import { useAddPractice, usePracticeList } from "../api/queries";

export const PracticeStatePage = () => {
  const practiceList = usePracticeList();

  const save = useAddPractice();

  if (practiceList.isLoading) {
    return <div className="container">Загрузка...</div>;
  }

  if (!practiceList.data || practiceList.data.length === 0) {
    return <div className="container">Нет данных для отображения</div>;
  }

  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th className="cell_slim" rowSpan={2}>
              Место
            </th>
            <th rowSpan={2}>Филиал</th>
            <th colSpan={5}>Задания</th>
            <th rowSpan={2}>Итого</th>
            <th rowSpan={2}>Максимальный результат</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          {practiceList.data
            .slice()
            .sort((a, b) => getSum(b.tasks) - getSum(a.tasks))
            .map((data, index) => (
              <tr key={data.branchName}>
                <td>{index + 1}</td>
                <td>{data.branchName}</td>

                {data.tasks.map((task, taskIndex) => (
                  <EditableCell
                    key={taskIndex}
                    save={(score: string) => {
                      save.mutate({
                        branchId: data.branchId,
                        taskNumber: taskIndex + 1,
                        score: Number(score),
                      });
                    }}
                    initialValue={task.toString()}
                  />
                ))}

                <td>{getSum(data.tasks)}</td>
                <td>{data.tasks.length * 10}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
