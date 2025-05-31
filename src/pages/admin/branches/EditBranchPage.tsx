import { useNavigate } from "@tanstack/react-router";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const EditBranchPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>Изменение филиала</h1>
      <form className={styles.form}>
        <label htmlFor="branch">Филиал</label>
        <Input id="branch"></Input>
        <Button
          size="l"
          color="primary"
          onClick={() => navigate({ to: "/admin/branches" })}
        >
          Сохранить
        </Button>
        <Button size="l" color="danger">
          Удалить
        </Button>
      </form>
    </div>
  );
};

export default EditBranchPage;
