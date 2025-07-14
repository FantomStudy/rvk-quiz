import { Link } from "@tanstack/react-router";

import Skeleton from "@/components/ui/skeleton/Skeleton";
import Table from "@/components/ui/table/Table";

import { useDashboardData } from "../api/queries";
import BranchRating from "../components/branch-rating/BranchRating";
import Filters from "../components/filters/Filters";
import MetricCard from "../components/metrics/MetricCard";
import { METRIC_LABELS } from "../constants";
import { useDashboardFilters } from "../hooks/useDashboardFilters";
import styles from "./DashboardPage.module.css";

export const DashboardPage = () => {
  const { filters, onChange } = useDashboardFilters();
  const dashboard = useDashboardData(filters);

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

          <Filters filters={filters} onChange={onChange} />
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
                    <td>
                      <Link
                        to="/admin/$userId/$nominationId"
                        params={{
                          userId: result.userId.toString(),
                          nominationId: result.nominationId.toString(),
                        }}
                      >
                        {result.fullName}
                      </Link>
                    </td>
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

        <section className={styles.section}>
          <h2>Рейтинг филиалов</h2>
          <BranchRating nominationId={filters.nominationId} />
        </section>
      </div>
    </div>
  );
};
