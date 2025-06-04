import { type FormEvent, useState } from "react";

import { getRouteApi } from "@tanstack/react-router";

import { useDeleteUser } from "@features/admin/user-control/useDeleteUser";
import { useUpdateUser } from "@features/admin/user-control/useUpdateUser";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const route = getRouteApi("/_adminLayout/admin/users/$userId");

const UpdateUserPage = () => {
  const { user } = route.useLoaderData();
  const [number, setNumber] = useState<string>(user.number);

  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateUser.mutate({ id: user.id, user: { number } });
  };

  return (
    <div className={styles.container}>
      <h1>Изменить участника</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="number">Номер</label>
          <Input
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          {updateUser.isError && (
            <div className={styles.error}>{updateUser.error.message}</div>
          )}

          <Button
            size="l"
            color="primary"
            type="submit"
            disabled={updateUser.isPending}
          >
            Изменить
          </Button>
        </form>
        <Button
          size="l"
          color="danger"
          onClick={() => {
            deleteUser.mutate(user.id);
          }}
          disabled={deleteUser.isPending}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default UpdateUserPage;
