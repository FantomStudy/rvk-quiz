import { Table } from "@/components/ui";

import { TEST_STATISTIC_DATA } from "../../constants";

import styles from "./TestStatePage.module.css";

export const TestStatePage = () => {
  return (
    <div className="container">
      <Table className={styles.table}>
        <thead>
          <tr>
            <td className="cell_slim">Место</td>
            <td>Филиал</td>
            <td>Набранный результат</td>
            <td>Максимальный результат</td>
          </tr>
        </thead>
        <tbody>
          {TEST_STATISTIC_DATA.slice()
            .sort((a, b) => b.totalScore - a.totalScore)
            .map((data, index) => (
              <tr key={data.branch}>
                <td>{index + 1}</td>
                <td>{data.branch}</td>
                <td>{data.totalScore}</td>
                <td>{data.maxScore}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
