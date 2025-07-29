import { Table } from "@/components/ui";

import { useTheoryList } from "../api/queries";

import styles from "./TheoryStatePage.module.css";

export const TheoryStatePage = () => {
  const theory = useTheoryList();

  if (theory.isLoading) {
    return <div className="container">Загрузка...</div>;
  }

  if (!theory.data || theory.data.length === 0) {
    return <div className="container">Нет данных для отображения</div>;
  }

  return (
    <div className="container">
      <Table className={styles.table}>
        <thead>
          <tr>
            <th className="cell_slim">Место</th>
            <th>Филиал</th>
            <th>Набранный результат</th>
            <th>Максимальный результат</th>
          </tr>
        </thead>
        <tbody>
          {theory.data
            .slice()
            .sort((a, b) => b.total - a.total)
            .map((data, index) => (
              <tr key={data.branchName}>
                <td>{index + 1}</td>
                <td>{data.branchName}</td>
                <td>{data.score}</td>
                <td>{data.total}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
