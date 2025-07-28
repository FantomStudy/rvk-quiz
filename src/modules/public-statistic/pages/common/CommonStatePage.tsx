import { Table } from "@/components/ui";

import { RATING } from "../../constants";

export const CommonStatePage = () => {
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
          {RATING.map((data, index) => (
            <tr key={data.branch}>
              <td>{index + 1}</td>
              <td>{data.branch}</td>
              <td>{data.practice}</td>
              <td>{data.test}</td>
              <td>{data.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
