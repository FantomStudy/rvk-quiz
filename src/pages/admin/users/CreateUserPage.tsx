import { type FormEvent, useState } from "react";

import { useCreateUser } from "@features/admin/user-control/useCreateUser";

import { Button, Input } from "@shared/ui";
import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "../FormPageLayout.module.css";

const CreateUserPage = () => {
  const [number, setNumber] = useState<string>("");

  const { mutate, isPending, isError, error } = useCreateUser();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ number });
  };

  return (
    <div className={styles.container}>
      <h1>Добавление участника</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="number">Номер</label>
          <Input
            id="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          {isError && <div className={styles.error}>{error.message}</div>}

          <Button size="l" color="primary" type="submit" disabled={isPending}>
            Создать
          </Button>
        </form>
        <ButtonLink size="l" color="danger" to="/admin/users">
          Назад
        </ButtonLink>
      </div>
    </div>
  );
};

export default CreateUserPage;
