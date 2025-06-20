import { useQuery } from "@tanstack/react-query";

import { useTestStore } from "@features/test-pass/store/testStore";

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
          Array<{ question: string; userAnswer: string; correctAnswer: string }>
        >(`/tests/result-table/${user?.id}/${nomination?.id}`)
        .then((r) => r.data),
  });
  console.log(data);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>
        Чтобы сохранить результат, обратитесь к администратору и сообщите ваше
        ФИО и номер
      </h2>
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>
        Вы можете ознакомиться и сфотографировать свои результаты
      </h2>
      <Table className={styles.resultTable}>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Вопрос</th>
            <th>Ваш ответ</th>
            <th>Верный ответ</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((result, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{result.question}</td>
              <td
                className={
                  result.userAnswer === result.correctAnswer
                    ? styles.correct
                    : styles.wrong
                }
              >
                {result.userAnswer}
              </td>
              <td>{result.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={styles.buttonContainer}>
        <ButtonLink to="/" size="l" className={styles.button}>
          Завершить тестирование
        </ButtonLink>
      </div>
    </div>
  );
};

export default TestResultsPage;
