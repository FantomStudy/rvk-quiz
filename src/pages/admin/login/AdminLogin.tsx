import { Button, Input } from "@shared/ui";

import styles from "./AdminLogin.module.css";

const AdminLogin = () => {
  return (
    <>
      <div className="container">
        <div className={styles.pageWrapper}>
          <div className={styles.title}>
            <h1>Система тестирования</h1>
            <p>Вход для администратора</p>
          </div>
          <form className={styles.form}>
            <label>Логин</label>
            <Input />
            <label>Пароль</label>
            <Input type="password" />

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

export default AdminLogin;
