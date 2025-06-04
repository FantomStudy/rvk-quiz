import { getRouteApi } from "@tanstack/react-router";

import { Table } from "@shared/ui";
import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "../TablePageLayout.module.css";

const route = getRouteApi("/_adminLayout/admin/users/");

const UsersPage = () => {
  const { users } = route.useLoaderData();

  return (
    <>
      <h1>Участники</h1>

      <Table>
        <thead>
          <tr>
            <th>Номер</th>
            <th className="cell__slim">Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.number}</td>
              <td>
                <ButtonLink
                  to="/admin/users/$userId"
                  params={{ userId: user.id.toString() }}
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
        <ButtonLink size="m" color="secondary" to="/admin/users/create">
          Добавить участника
        </ButtonLink>
      </div>
    </>
  );
};

export default UsersPage;
