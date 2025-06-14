import { getRouteApi } from "@tanstack/react-router";

import { Table } from "@shared/ui";
import LinkButton from "@shared/ui/button/ButtonLink";
import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "../TablePageLayout.module.css";

const route = getRouteApi("/_adminLayout/admin/branches/");

const BranchesPage = () => {
  const { branches } = route.useLoaderData();

  return (
    <>
      <h1>Филиалы</h1>
      <Table>
        <thead>
          <tr>
            <th>Адрес</th>
            <th className="cell__slim">Действие</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.id}>
              <td>{branch.address}</td>
              <td>
                <ButtonLink
                  to="/admin/branches/$branchId"
                  params={{ branchId: branch.id.toString() }}
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
        <LinkButton size="m" color="secondary" to="/admin/branches/create">
          Добавить филиал
        </LinkButton>
      </div>
    </>
  );
};

export default BranchesPage;
