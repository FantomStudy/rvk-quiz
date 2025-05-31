import { useNavigate } from "@tanstack/react-router";

import { Button, Table } from "@shared/ui";

import styles from "../TablePageLayout.module.css";

const BranchesPage = () => {
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
          <tr>
            <td>г.Оренбург, ул. Джангильдина 24</td>
            <td>
              <Button
                size="s"
                onClick={() => navigate({ to: "/admin/branches/edit-branch" })}
              >
                Изменить
              </Button>
            </td>
          </tr>
          <tr>
            <td>г.Оренбург, ул. Джангильдина 24</td>
            <td>
              <Button
                size="s"
                onClick={() => navigate({ to: "/admin/branches/edit-branch" })}
              >
                Изменить
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      
      <div className={styles.centerContainer}>
        <Button
          size="m"
          color="secondary"
          onClick={() => navigate({ to: "/admin/branches/create-branch" })}
        >
          Добавить филиал
        </Button>
      </div>
    </>
  );
};

export default BranchesPage;
