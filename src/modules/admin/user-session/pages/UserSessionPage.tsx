import { Table } from "@/components/ui";

import type { TestResult } from "../types";

import styles from "./UserSessionPage.module.css";

interface UserSessionPageProps {
  testResult: TestResult;
}

export const UserSessionPage = ({ testResult }: UserSessionPageProps) => (
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
        {testResult.map((str, index) => (
          <tr key={str.questionId}>
            <td>{index + 1}</td>
            <td>{str.question}</td>
            <td className={str.isCorrect ? styles.correct : styles.wrong}>
              {str.userAnswer}
            </td>
            <td>{str.correctAnswer}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
