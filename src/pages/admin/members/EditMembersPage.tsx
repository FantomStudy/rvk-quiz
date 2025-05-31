import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const EditMemberPage = () => {
  return (
    <div className={styles.container}>
      <h1>Изменить участника</h1>
      <form className={styles.form}>
        <label htmlFor="number">Номер</label>
        <Input id="number"></Input>
        <Button size="l" color="primary">
          Изменить
        </Button>
        <Button size="l" color="danger">
          Удалить
        </Button>
      </form>
    </div>
  );
};

export default EditMemberPage;
