import { Button, Input } from "@/components/ui";

import styles from "./AuthForm.module.css";
import { useAuthForm } from "./useAuthForm";

export const AuthForm = () => {
  const { form, request } = useAuthForm();
  const { login, password } = form.values;

  return (
    <form className={styles.form} onSubmit={form.onSubmit}>
      <label htmlFor="login">Логин</label>
      <Input
        id="login"
        name="login"
        value={login}
        onChange={form.onChange}
        required
      />

      <label htmlFor="password">Пароль</label>
      <Input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={form.onChange}
        required
      />

      {request.isError && (
        <div className={styles.error}>
          {request.error?.message || "Ошибка авторизации"}
        </div>
      )}

      <Button
        type="submit"
        size="l"
        color="primary"
        className={styles.button}
        disabled={request.isPending}
      >
        {request.isPending ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
};
