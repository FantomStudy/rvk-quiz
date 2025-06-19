import { StartTestForm } from "@features/test-pass/ui/StartTestForm";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.pageWrapper}>
          <div className={styles.title}>
            <h1>Система тестирования</h1>
            <p>Вход</p>
          </div>

          <StartTestForm />
        </div>
      </div>
      <img src="/wave-mask.png" alt="wave" className={styles.wave} />
    </>
  );
};

export default HomePage;
