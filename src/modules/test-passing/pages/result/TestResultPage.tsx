import { useQuery } from "@tanstack/react-query";

import { ButtonLink, Table } from "@/components/ui";
import { api } from "@/config";
import { useResetTest, useSessionData } from "@/store/selectors";

import styles from "./TestResultPage.module.css";

export const TestResultPage = () => {
  const { user, nomination } = useSessionData();

  const resetTest = useResetTest();

  const { data } = useQuery({
    queryKey: ["results-page", user?.id, nomination?.id],
    queryFn: async () =>
      await api
        .get<
          Array<{ question: string; userAnswer: string; correctAnswer: string }>
        >(`/tests/result-table/${user?.id}/${nomination?.id}`)
        .then((r) => r.data),
  });

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
            <th className="cell_slim">Номер</th>
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
        <ButtonLink className={styles.button} onClick={resetTest} to="/">
          Завершить тестирование
        </ButtonLink>
      </div>
    </div>
  );
};
