import { AuthForm } from "../components/auth-form/AuthForm";

import styles from "./AdminAuthPage.module.css";

export const AdminAuthPage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.pageWrapper}>
          <div className={styles.title}>
            <h1>Система тестирования</h1>
            <p>Вход для администратора</p>
          </div>

          <AuthForm />
        </div>
      </div>

      <img alt="wave-mask" className={styles.waveMask} src="/wave-mask.png" />
    </>
  );
};
