import { useNavigate } from "@tanstack/react-router";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const CreateNominationPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Создание номинации</h1>
      <form className={styles.form}>
        <label htmlFor="name">Название</label>

        <Input id="name" />
        <label htmlFor="count">Количество вопросов в тесте</label>
        <Input id="count" />

        <Button color="primary" size="l">
          Создать
        </Button>
        <Button
          color="danger"
          size="l"
          onClick={() => navigate({ to: "/admin/nominations" })}
        >
          Назад
        </Button>
      </form>
    </div>
  );
};

export default CreateNominationPage;
