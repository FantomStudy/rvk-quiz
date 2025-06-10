import { type ChangeEvent, type FormEvent, useState } from "react";

import { getRouteApi } from "@tanstack/react-router";

import { useStartTest } from "@features/user/test-passing/model/mutations";

import { Button, Input, Select } from "@shared/ui";

import styles from "./HomePage.module.css";

const route = getRouteApi("/_headerLayout/");

interface FormState {
  number: string;
  nominationId: number;
}

const HomePage = () => {
  const { nominations } = route.useLoaderData();

  const [form, setForm] = useState<FormState>({
    number: "",
    nominationId: 0,
  });

  const { mutate } = useStartTest();

  const selectedNomination = nominations.find(
    (nomination) => nomination.id === form.nominationId,
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.nominationId === 0) {
      alert("Пожалуйста, выберите номинацию.");
      return;
    }
    mutate(form);
  };

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "nominationId" ? Number(value) : value,
    }));
  };

  return (
    <>
      <div className="container">
        <div className={styles.pageWrapper}>
          <div className={styles.title}>
            <h1>Система тестирования</h1>
            <p>Вход</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="nomination">Номинация</label>
            <Select
              id="nomination"
              name="nominationId"
              required
              value={form.nominationId}
              onChange={handleChange}
            >
              <option value={0} disabled>
                Выберите номинацию
              </option>
              {nominations.map((nomination) => (
                <option key={nomination.id} value={nomination.id}>
                  {nomination.name}
                </option>
              ))}
            </Select>

            <label htmlFor="user">Номер</label>
            <Input
              id="user"
              name="number"
              required
              value={form.number}
              onChange={handleChange}
            />

            {selectedNomination && (
              <div className={styles.time}>
                <p>Время на прохождение теста:</p>
                <p className={styles.blue}>{selectedNomination.duration}</p>
              </div>
            )}

            <Button size="l" color="primary" className={styles.button}>
              Войти
            </Button>
          </form>
        </div>
      </div>
      <img src="/wave-mask.png" alt="wave" className={styles.wave} />
    </>
  );
};

export default HomePage;
