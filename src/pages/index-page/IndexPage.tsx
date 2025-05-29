import { Button } from "@shared/ui/button/Button";
import styles from "./IndexPage.module.css";
const IndexPage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.indexPage}>
          <div className={styles.label}>
            <h1>Система тестирования</h1>
            <p>Вход</p>
          </div>
          <form className={styles.form}>
            <p>Номинация</p>
            <select className={styles.select}>
              <option value="" disabled selected>
                Выберите номинацию
              </option>
              <option value="1">Номинация 1</option>
              <option value="2">Номинация 2</option>
              <option value="3">Номинация 3</option>
            </select>
            <p>Номер</p>
            <input type="text" />

            <div className={styles.time}>
              <p>Время теста</p>
              <p className={styles.blue}>45:00</p>
            </div>

            <Button size="l" color="primary">
              Войти
            </Button>
          </form>
        </div>
      </div>
      <img src="/wave-mask.png" alt="wave" className={styles.wave} />
    </>
  );
};

export default IndexPage;
