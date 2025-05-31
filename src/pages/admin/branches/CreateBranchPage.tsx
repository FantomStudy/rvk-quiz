import { useNavigate } from "@tanstack/react-router";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const CreateBranchPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Добавление филиала</h1>
      <form className={styles.form}>
        <label htmlFor="branch">Филиал</label>
        <Input id="branch"></Input>
        <Button size="l" color="primary">
          Создать
        </Button>
        <Button
          size="l"
          color="danger"
          onClick={() => navigate({ to: "/admin/branches" })}
        >
          Назад
        </Button>
      </form>
    </div>
  );
};

export default CreateBranchPage;
