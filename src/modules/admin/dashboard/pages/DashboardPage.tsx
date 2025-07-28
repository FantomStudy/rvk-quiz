import { Link } from "@tanstack/react-router";

import { Skeleton, Table } from "@/components/ui";

import { useDashboardData } from "../api/queries";
import { BranchRating, FilterBar, MetricCard } from "../components";
import { METRIC_LABELS } from "../constants";
import { useDashboardFilters } from "../hooks/useDashboardFilters";

import styles from "./DashboardPage.module.css";

export const DashboardPage = () => {
  const { filters, onChange } = useDashboardFilters();
  const dashboard = useDashboardData(filters);

  if (dashboard.error) {
    return (
      <div className="container">
        <h1 className={styles.title}>Ошибка при загрузке данных</h1>
        <p>Пожалуйста, попробуйте позже.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className={styles.title}>Результаты участников</h1>

      <div className={styles.wrapper}>
        <section>
          <h2>Общая статистика</h2>
          <div className={styles.metricWrapper}>
            {dashboard.isLoading
              ? Object.entries(METRIC_LABELS).map(([key]) => (
                  <Skeleton
                    key={key}
                    height={161}
                    style={{ minWidth: 330 }}
                    borderRadius={10}
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
                  )
                )}
          </div>
        </section>

        <section>
          <h2>Фильтры</h2>

          <FilterBar filters={filters} onChange={onChange} />
        </section>

        <section>
          <h2>Результаты участников</h2>

          {dashboard.isLoading ? (
            <Skeleton height={300} borderRadius={15} />
          ) : (
            <Table height={300}>
              <thead>
                <tr>
                  <th className="cell_slim">Место</th>
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
                  <tr key={`${result.userId}-${result.nominationId}`}>
                    <td>{index + 1}</td>
                    <td>{result.number}</td>
                    <td>
                      <Link
                        params={{
                          userId: result.userId.toString(),
                          nominationId: result.nominationId.toString(),
                        }}
                        to="/admin/$userId/$nominationId"
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

        <section>
          <h2>Рейтинг филиалов</h2>
          <BranchRating nominationId={filters.nominationId} />
        </section>
      </div>
    </div>
  );
};
