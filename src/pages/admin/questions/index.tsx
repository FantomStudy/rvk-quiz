import { getRouteApi, useLoaderData } from "@tanstack/react-router";

import { Table } from "@shared/ui";
import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "../TablePageLayout.module.css";

const route = getRouteApi(
  "/_adminLayout/admin/nominations/$nominationId/questions/",
);

const QuestionsPage = () => {
  const { nomination } = useLoaderData({
    from: "/_adminLayout/admin/nominations/$nominationId",
  });
  const { questions } = route.useLoaderData();

  return (
    <>
      <h1>
        Тема: {nomination.name}
        <br />
        <span style={{ fontWeight: 300 }}>Вопросы номинации</span>
      </h1>

      <Table>
        <thead>
          <tr>
            <th>Вопрос</th>
            <th>Правильный ответ</th>
            <th className="cell__slim"></th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.question}</td>
              <td>{}</td>
              <td className="cell__slim"></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={styles.centerContainer}>
        <ButtonLink
          size="m"
          color="secondary"
          to="/admin/nominations/$nominationId/questions/create"
          params={{ nominationId: nomination.id.toString() }}
        >
          Добавить вопрос
        </ButtonLink>
      </div>
    </>
  );
};

export default QuestionsPage;
