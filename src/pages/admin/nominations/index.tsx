import { useNavigate } from "@tanstack/react-router";

import { Button, Table } from "@shared/ui";

import styles from "../TablePageLayout.module.css";

const NominationsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Номинации</h1>

      <Table>
        <thead>
          <tr>
            <th>Номинация</th>
            <th>Вопросов в базе</th>
            <th>Вопросов в тесте</th>
            <th className="cell__slim">Вопросы</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ПДД категории В</td>
            <td>135</td>
            <td>25</td>
            <td>
              <Button
                onClick={() =>
                  navigate({ to: "/admin/nominations/edit-nomination" })
                }
              >
                Изменить
              </Button>
            </td>
          </tr>
          <tr>
            <td>ПДД категории А</td>
            <td>105</td>
            <td>30</td>
            <td>
              <Button
                onClick={() =>
                  navigate({ to: "/admin/nominations/edit-nomination" })
                }
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
          onClick={() =>
            navigate({ to: "/admin/nominations/create-nomination" })
          }
        >
          Добавить номинацию
        </Button>
      </div>
    </>
  );
};

export default NominationsPage;
