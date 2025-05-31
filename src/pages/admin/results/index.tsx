import { Table } from "@shared/ui";

const ResultsPage = () => {
  return (
    <>
      <h1>Результаты участников</h1>

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
      </Table>
    </>
  );
};

export default ResultsPage;
