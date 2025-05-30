import { Button, Input, Select } from "@shared/ui";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className={styles.pageWrapper}>
          <div className={styles.title}>
            <h1>Система тестирования</h1>
            <p>Вход</p>
          </div>
          <form className={styles.form}>
            <label htmlFor="nomination">Номинация</label>
            <Select value={""} id="nomination">
              <option value="" disabled>
                Выберите номинацию
              </option>
              <option value="1">Номинация 1</option>
              <option value="2">Номинация 2</option>
              <option value="3">Номинация 3</option>
            </Select>

            <label htmlFor="userID">Номер</label>
            <Input id="userID" />

            <div className={styles.time}>
              <p>Время теста</p>
              <p className={styles.blue}>45:00</p>
            </div>

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

export default Home;
