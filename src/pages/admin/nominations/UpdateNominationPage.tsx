import { type ChangeEvent, type FormEvent, useState } from "react";

import { getRouteApi } from "@tanstack/react-router";

import { useDeleteNomination } from "@features/admin/nomination-control/useDeleteNomination";
import { useUpdateNomination } from "@features/admin/nomination-control/useUpdateNomination";

import type { CreateNomination } from "@entities/nomination/model/nominaition";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const route = getRouteApi("/_adminLayout/admin/nominations/$nominationId");

const UpdateNominationsPage = () => {
  const { nomination } = route.useLoaderData();
  const [form, setForm] = useState<CreateNomination>(nomination);

  const updateNomination = useUpdateNomination();
  const deleteNomination = useDeleteNomination();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    updateNomination.mutate({
      id: nomination.id,
      nomination: { ...form, questionsCount: Number(form.questionsCount) },
    });
  };

  return (
    <div className={styles.container}>
      <h1>Изменение номинации</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Название</label>
          <Input
            id="name"
            name="name"
            value={form?.name}
            onChange={handleChange}
          />

          <label htmlFor="questionsCount">Количество вопросов в тесте</label>
          <Input
            id="questionsCount"
            name="questionsCount"
            value={form?.questionsCount}
            onChange={handleChange}
          />

          <label htmlFor="duration">Время выполнения</label>
          <Input
            id="duration"
            name="duration"
            value={form?.duration}
            onChange={handleChange}
          />

          {updateNomination.isError && (
            <div className={styles.error}>{updateNomination.error.message}</div>
          )}
          <Button
            color="primary"
            size="l"
            type="submit"
            disabled={updateNomination.isPending}
          >
            Изменить
          </Button>
        </form>

        <Button
          color="danger"
          size="l"
          onClick={() => deleteNomination.mutate(nomination.id)}
          disabled={deleteNomination.isPending}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default UpdateNominationsPage;
