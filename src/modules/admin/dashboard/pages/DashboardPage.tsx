import { type ChangeEvent, useState } from "react";

import { useBranchList } from "@/api/branches/queries";
import { useNominationList } from "@/api/nominations/queries";
import { Select } from "@/components/ui";
import Skeleton from "@/components/ui/skeleton/Skeleton";
import Table from "@/components/ui/table/Table";

import { useDashboardData } from "../api/queries";
import MetricCard from "../components/metric-card/MetricCard";
import styles from "./DashboardPage.module.css";

const METRIC_LABELS = {
  passedTest: "Пройдено тестов",
  gpa: "Средний результат",
  maxScore: "Лучший результат",
};

export const DashboardPage = () => {
  const [filters, setFilters] = useState({
    branchId: "",
    nominationId: "",
  });

  const dashboard = useDashboardData(filters);
  const branchList = useBranchList();
  const nominationList = useNominationList();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h1 className={styles.title}>Результаты участников</h1>

      <div className={styles.wrapper}>
        <section className={styles.section}>
          <h2>Общая статистика</h2>
          <div className={styles.metricWrapper}>
            {dashboard.isLoading
              ? Object.entries(METRIC_LABELS).map(([key]) => (
                  <Skeleton
                    key={key}
                    height={161}
                    borderRadius={10}
                    style={{ minWidth: 330 }}
                  />
                ))
              : dashboard.data?.blockStats &&
                Object.entries(dashboard.data?.blockStats).map(
                  ([key, value]) => (
                    <MetricCard
                      key={key}
                      value={value}
                      descriptor={
                        METRIC_LABELS[key as keyof typeof METRIC_LABELS]
                      }
                    />
                  ),
                )}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Фильтры</h2>
          <div className={styles.filterWrapper}>
            <Select
              className={styles.selectMini}
              name="branchId"
              value={filters.branchId}
              onChange={handleChange}
              disabled={branchList.isLoading || branchList.isError}
            >
              <option value="">
                {branchList.isLoading
                  ? "Загрузка..."
                  : branchList.isError
                    ? "Загрузка не удалась"
                    : "Все филиалы"}
              </option>
              {branchList.data?.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.address}
                </option>
              ))}
            </Select>

            <Select
              className={styles.selectMini}
              name="nominationId"
              value={filters.nominationId}
              onChange={handleChange}
              disabled={nominationList.isLoading || nominationList.isError}
            >
              <option value="">
                {nominationList.isLoading
                  ? "Загрузка..."
                  : nominationList.isError
                    ? "Загрузка не удалась"
                    : "Все номинации"}
              </option>
              {nominationList.data?.map((nomination) => (
                <option key={nomination.id} value={nomination.id}>
                  {nomination.name}
                </option>
              ))}
            </Select>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Результаты участников</h2>

          {dashboard.isLoading ? (
            <Skeleton height={300} borderRadius={15} />
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Место</th>
                  <th>Номер</th>
                  <th>ФИО</th>
                  <th>Номинация</th>
                  <th>Филиал</th>
                  <th>Время</th>
                  <th>Результат</th>
                </tr>
              </thead>
              <tbody>
                {dashboard.data?.testResults.map((result, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{result.number}</td>
                    <td>{result.fullName}</td>
                    <td>{result.nomination}</td>
                    <td>{result.branch}</td>
                    <td>{result.date}</td>
                    <td>{result.result}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </section>
      </div>
    </div>
  );
};
