import { Table } from "@/components/ui";

import { PRACTICE_STATISTIC_DATA } from "../../constants";
import { getSum } from "../../utils";

import styles from "./PracticeStatePage.module.css";

export const PracticePage = () => {
  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <td className="cell_slim">Место</td>
            <td>Филиал</td>
            <td className={styles.mainColumn}>
              Задания
              <div className={styles.wrapper}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
              </div>
            </td>
            <td>Итого</td>
            <td>Максимальный результат</td>
          </tr>
        </thead>
        <tbody>
          {PRACTICE_STATISTIC_DATA.slice()
            .sort((a, b) => getSum(b.tasks) - getSum(a.tasks))
            .map((data, index) => (
              <tr key={data.branch}>
                <td>{index + 1}</td>
                <td>{data.branch}</td>
                <td>
                  <div className={styles.wrapperBody}>
                    {data.tasks.map((task, taskIndex) => (
                      <p key={taskIndex}>{task}</p>
                    ))}
                  </div>
                </td>
                <td>{getSum(data.tasks)}</td>
                <td>{data.tasks.length * 10}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
