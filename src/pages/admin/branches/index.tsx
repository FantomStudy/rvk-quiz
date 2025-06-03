import { getRouteApi, useNavigate } from "@tanstack/react-router";

import { Button, Table } from "@shared/ui";

import styles from "../TablePageLayout.module.css";

const route = getRouteApi("/_adminLayout/admin/branches/");

const BranchesPage = () => {
  const { branches } = route.useLoaderData();
  const navigate = useNavigate();

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
                <Button
                  size="s"
                  onClick={() =>
                    navigate({
                      to: "/admin/branches/$branchId",
                      params: { branchId: branch.id!.toString() },
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
          onClick={() => navigate({ to: "/admin/branches/create" })}
        >
          Добавить филиал
        </Button>
      </div>
    </>
  );
};

export default BranchesPage;
