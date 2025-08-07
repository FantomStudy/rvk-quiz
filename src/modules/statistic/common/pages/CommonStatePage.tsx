import { Table } from "@/components/ui";

import { useCommonList } from "../api/queries";

export const CommonStatePage = () => {
  const commonList = useCommonList();

  if (commonList.isLoading) {
    return <div className="container">Загрузка...</div>;
  }

  if (!commonList.data || commonList.data.length === 0) {
    return <div className="container">Нет данных для отображения</div>;
  }

  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th className="cell_slim">Место</th>
            <th>Филиал</th>
            <th>Практические задания</th>
            <th>Тестирование</th>
            <th>Итоговый результат</th>
          </tr>
        </thead>
        <tbody>
          {commonList.data.map((data, index) => (
            <tr key={data.branchName}>
              <td>{index + 1}</td>
              <td>{data.branchName}</td>
              <td>{data.practiceScores}</td>
              <td>{data.theoryScore}</td>
              <td>{data.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
