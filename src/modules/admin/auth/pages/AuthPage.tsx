import { AuthForm } from "../components/AuthForm";
import styles from "./AuthPage.module.css";

export const AuthPage = () => {
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

      <img src="/wave-mask.png" alt="wave-mask" className={styles.waveMask} />
    </>
  );
};
