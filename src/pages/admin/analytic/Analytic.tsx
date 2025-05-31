import { Select } from "@shared/ui";
import MetricCard from "@shared/ui/metric-card/MetricCard";

import styles from "./Analytic.module.css";

const Analytic = () => {
  return (
    <div className={styles.container}>
      <h1>Аналитика</h1>

      <h2>Общая статистика</h2>
      <div className={styles.metricWrapper}>
        <MetricCard descriptor="Пройдено тестов" value="25" />
        <MetricCard descriptor="Средний балл" value="12.3" />
        <MetricCard descriptor="Пройдено тестов" value="25" />
        <MetricCard descriptor="Средний балл" value="12.3" />
        <MetricCard descriptor="Пройдено тестов" value="25" />
      </div>

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
  );
};

export default Analytic;
