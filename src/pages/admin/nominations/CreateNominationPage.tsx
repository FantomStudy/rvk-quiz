import { type ChangeEvent, type FormEvent, useState } from "react";

import { useNavigate } from "@tanstack/react-router";

import { useCreateNomination } from "@features/admin/nomination-control/useCreateNomination";

import type { CreateNomination } from "@entities/nomination/model/nominaition";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const CreateNominationPage = () => {
  const [form, setForm] = useState<CreateNomination>({
    name: "",
    duration: "",
    questionsCount: 0,
  });

  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useCreateNomination();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    form.questionsCount = Number(form.questionsCount);
    mutate(form);
  };

  return (
    <div className={styles.container}>
      <h1>Создание номинации</h1>
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

          {isError && <div className={styles.error}>{error.message}</div>}

          <Button color="primary" size="l" type="submit" disabled={isPending}>
            Создать
          </Button>
        </form>

        <Button
          color="danger"
          size="l"
          onClick={() => navigate({ to: "/admin/nominations" })}
        >
          Назад
        </Button>
      </div>
    </div>
  );
};

export default CreateNominationPage;
