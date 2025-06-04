import { getRouteApi } from "@tanstack/react-router";

import { Table } from "@shared/ui";
import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "../TablePageLayout.module.css";

const route = getRouteApi("/_adminLayout/admin/nominations/");

const NominationsPage = () => {
  const { nominations } = route.useLoaderData();

  return (
    <>
      <h1>Номинации</h1>

      <Table>
        <thead>
          <tr>
            <th>Номинация</th>
            <th>Вопросов в базе</th>
            <th>Вопросов в тесте</th>
            <th>Длительность</th>
            <th className="cell__slim">Вопросы</th>
          </tr>
        </thead>
        <tbody>
          {nominations.map((nomination) => (
            <tr key={nomination.id}>
              <td>{nomination.name}</td>
              <td>{nomination.allCount}</td>
              <td>{nomination.questionsCount}</td>
              <td>{nomination.duration}</td>
              <td>
                <ButtonLink
                  to="/admin/nominations/$nominationId"
                  params={{ nominationId: nomination.id.toString() }}
                  // preload={false}
                >
                  Изменить
                </ButtonLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className={styles.centerContainer}>
        <ButtonLink size="m" color="secondary" to="/admin/nominations/create">
          Добавить номинацию
        </ButtonLink>
      </div>
    </>
  );
};

export default NominationsPage;
