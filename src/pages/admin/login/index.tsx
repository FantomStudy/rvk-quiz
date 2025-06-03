import { type ChangeEvent, type FormEvent, useState } from "react";

import { type AdminCredentials, useLoginMutation } from "@features/admin/auth";

import { Button, Input } from "@shared/ui";

import styles from "./AdminLogin.module.css";

const AdminLoginPage = () => {
  const [form, setForm] = useState<AdminCredentials>({
    login: "",
    password: "",
  });

  const { mutate, isPending, isError, error } = useLoginMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <>
      <div className="container">
        <div className={styles.pageWrapper}>
          <div className={styles.title}>
            <h1>Система тестирования</h1>
            <p>Вход для администратора</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="login">Логин</label>
            <Input
              id="login"
              name="login"
              value={form.login}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Пароль</label>
            <Input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {isError && (
              <div className={styles.error}>
                {error.message || "Ошибка авторизации"}
              </div>
            )}

            <Button
              type="submit"
              size="l"
              color="primary"
              className={styles.button}
              disabled={isPending}
            >
              {isPending ? "Вход..." : "Войти"}
            </Button>
          </form>
        </div>
      </div>
      <img src="/wave-mask.png" alt="wave" className={styles.wave} />
    </>
  );
};

export default AdminLoginPage;
