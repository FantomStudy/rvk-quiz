import { useQuery } from "@tanstack/react-query";

import { useTestStore } from "@features/user/test-passing/model/testStore";

import api from "@shared/api";
import { Table } from "@shared/ui";
import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "./TestResultsPage.module.css";

const TestResultsPage = () => {
  const { user, nomination } = useTestStore();
  const { data } = useQuery({
    queryKey: ["results-page", user?.id, nomination?.id],
    queryFn: async () =>
      await api
        .get<
          Array<{ userAnswer: number; correctAnswer: number }>
        >(`/tests/result-table/${user?.id}/${nomination?.id}`)
        .then((r) => r.data),
  });

  console.log(data);

  return (
    <div className="container">
      <Table className={styles.resultTable}>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Ваш ответ</th>
            <th>Верный ответ</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((couple, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td
                className={
                  couple.userAnswer === couple.correctAnswer
                    ? styles.correct
                    : styles.wrong
                }
              >
                {couple.userAnswer}
              </td>
              <td>{couple.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ButtonLink to="/" size="m" color="primary">
        На главную
      </ButtonLink>
    </div>
  );
};

export default TestResultsPage;
