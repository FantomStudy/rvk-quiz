import { Table } from "@shared/ui";

const ResultsTable = () => {

  
  return (
    <Table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Тема</th>
          <th>Регион</th>
          <th>Дата</th>
          <th>Результат</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>48948998</td>
          <td>Права категории B</td>
          <td>Оренбург</td>
          <td>21.12.24 12:54</td>
          <td>17/25</td>
        </tr>
        <tr>
          <td>48948998</td>
          <td>Права категории B</td>
          <td>Оренбург</td>
          <td>21.12.24 12:54</td>
          <td>17/25</td>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </Table>
  );
};

export default ResultsTable;
