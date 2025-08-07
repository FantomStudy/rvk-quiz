import { useResultTable } from "@/api/result/queries";
import { Skeleton, Table } from "@/components/ui";

import styles from "./ResultTable.module.css";

interface ResultsTableProps {
  nominationId: number;
  userId: number;
}

export const ResultsTable = ({ userId, nominationId }: ResultsTableProps) => {
  const result = useResultTable(userId, nominationId);

  if (result.isLoading) {
    return <Skeleton height={300} />;
  }

  if (!result.data) {
    return <p>Результаты теста недоступны</p>;
  }

  return (
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
        {result.data?.map((result, index) => (
          <tr key={result.questionId}>
            <td>{index + 1}</td>
            <td>{result.question}</td>
            <td className={result.isCorrect ? styles.correct : styles.wrong}>
              {result.userAnswer}
            </td>
            <td>{result.correctAnswer}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
