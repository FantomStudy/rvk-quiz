import { useLoaderData } from "@tanstack/react-router";

import Table from "@/components/ui/table/Table";

import styles from "./AdminUserResult.module.css";

export const AdminUserResult = () => {
  const data = useLoaderData({
    from: "/_headerLayout/_adminLayout/admin/$userId/$nominationId",
  });

  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Вопрос</th>
            <th>Ваш ответ</th>
            <th>Верный ответ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((result, index) => (
            <tr key={index}>
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
    </div>
  );
};
