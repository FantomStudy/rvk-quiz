import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const CreateMemberPage = () => {
  return (
    <div className={styles.container}>
      <h1>Добавление участника</h1>
      <form className={styles.form}>
        <label htmlFor="number">Номер</label>
        <Input id="number"></Input>
        <Button size="l" color="primary">
          Создать
        </Button>
        <Button size="l" color="danger">
          Отменить
        </Button>
      </form>
    </div>
  );
};

export default CreateMemberPage;
