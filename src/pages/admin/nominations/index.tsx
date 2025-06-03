import { getRouteApi, useNavigate } from "@tanstack/react-router";

import { Button, Table } from "@shared/ui";

import styles from "../TablePageLayout.module.css";

const route = getRouteApi("/_adminLayout/admin/nominations/");

const NominationsPage = () => {
  const { nominations } = route.useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h1>Номинации</h1>

      <Table>
        <thead>
          <tr>
            <th>Номинация</th>
            <th>Вопросов в базе</th>
            {/* <th>Вопросов в тесте</th> */}
            <th>Длительность</th>
            <th className="cell__slim">Вопросы</th>
          </tr>
        </thead>
        <tbody>
          {nominations.map((nomination) => (
            <tr key={nomination.id}>
              <td>{nomination.name}</td>
              <td>{nomination.questionsCount}</td>
              <td>{nomination.duration}</td>
              <td>
                <Button
                  onClick={() =>
                    navigate({
                      to: "/admin/nominations/$nominationId",
                      params: { nominationId: nomination.id!.toString() },
                    })
                  }
                >
                  Изменить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className={styles.centerContainer}>
        <Button
          size="m"
          color="secondary"
          onClick={() => navigate({ to: "/admin/nominations/create" })}
        >
          Добавить номинацию
        </Button>
      </div>
    </>
  );
};

export default NominationsPage;
