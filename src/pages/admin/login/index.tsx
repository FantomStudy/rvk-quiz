import { type ChangeEvent, type FormEvent, useState } from "react";

import type { AdminCredentials } from "@features/admin/admin-login/model/login";
import { useLoginMutation } from "@features/admin/admin-login/model/useLoginMutation";

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
            <label>Логин</label>
            <Input name="login" value={form.login} onChange={handleChange} />

            <label>Пароль</label>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />

            {isError && (
              <div className={styles.error}>
                {error?.message || "Ошибка авторизации"}
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
