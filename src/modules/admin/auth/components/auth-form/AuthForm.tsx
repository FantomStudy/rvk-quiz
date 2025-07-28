import { Button, Input } from "@/components/ui";

import { useAuthForm } from "./useAuthForm";

import styles from "./AuthForm.module.css";

export const AuthForm = () => {
  const { form, request } = useAuthForm();
  const { login, password } = form.values;

  return (
    <form className={styles.form} onSubmit={form.onSubmit}>
      <label htmlFor="login">Логин</label>
      <Input
        required
        id="login"
        name="login"
        value={login}
        onChange={form.onChange}
      />

      <label htmlFor="password">Пароль</label>
      <Input
        required
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={form.onChange}
      />

      {request.error && (
        <div className={styles.error}>
          {request.error?.message || "Ошибка авторизации"}
        </div>
      )}

      <Button
        type="submit"
        className={styles.button}
        disabled={request.isPending}
      >
        {request.isPending ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
};
