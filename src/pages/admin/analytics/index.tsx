import { Select, Table } from "@shared/ui";
import MetricCard from "@shared/ui/metric-card/MetricCard";

import styles from "./AnalyticsPage.module.css";

const AnalyticsPage = () => {
  return (
    <>
      <h1>Аналитика</h1>

      <div className={styles.wrapper}>
        <div>
          <h2>Общая статистика</h2>
          <div className={styles.metricWrapper}>
            <MetricCard descriptor="Пройдено тестов" value="25" />
            <MetricCard descriptor="Средний балл" value="12.3" />
            <MetricCard descriptor="Пройдено тестов" value="25" />
            <MetricCard descriptor="Средний балл" value="12.3" />
            <MetricCard descriptor="Пройдено тестов" value="25" />
          </div>
        </div>

        <div>
          <h2>Фильтры</h2>
          <div className={styles.filterWrapper}>
            <Select className={`${styles.selectMini}`}>
              <option value="">Регион</option>
            </Select>
            <Select className={`${styles.selectMini}`}>
              <option value="">Номинации</option>
            </Select>
          </div>
        </div>

        <div>
          <h2>Результаты участников</h2>
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
        </div>

        <div>
          <h2>Результаты тестов</h2>
          <Table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Вопросов</th>
                <th>Дано верных ответов</th>
                <th>Худший результат</th>
                <th>Лучший результат</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Категория B</td>
                <td>25</td>
                <td>75%</td>
                <td>75%</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Категория B</td>
                <td>25</td>
                <td>75%</td>
                <td>75%</td>
                <td>75%</td>
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
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
