import CurrentTime from "@widgets/CurrentTime";
import Timer from "@widgets/Timer";

import { Button } from "@shared/ui";

import styles from "./TestPage.module.css";

const TestPage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.testPage}>
          <Timer initialMinutes={45} initialSeconds={30} />
          <form className={styles.form}>
            <h1>
              Какую передачу нужно выбрать на ЗИЛ 312570 при скорости более 50
              км/ч, если вы едете по неровной поверхности?{" "}
            </h1>
            <div className={styles.stripe}></div>
            <div className={styles.radio}>
              <input type="radio" id="1" name="1" />
              <label htmlFor="1">Нужно выбрать 3 передачу</label>
            </div>
            <div className={styles.radio}>
              <input type="radio" id="2" name="1" />
              <label htmlFor="2">Нужно выбрать 3 передачу</label>
            </div>
            <div className={styles.radio}>
              <input type="radio" id="3" name="1" />
              <label htmlFor="3">Нужно выбрать 3 передачу</label>
            </div>
          </form>
          <CurrentTime />
          <Button size="s" color="secondary">
            Вопрос 4 из 25
          </Button>
          <Button size="s" color="primary">
            Тест: Вождение на ЗИЛ 312670
          </Button>
          <div className={styles.progressBar}>
            <Button size="s" color="transparent">
              Назад
            </Button>
            <progress value={30} max={100} className={styles.progress} />
            <Button size="s" color="danger">
              Далее
            </Button>
          </div>
        </div>
      </div>
      <img src="/wave-mask.png" alt="wave" className={styles.wave} />
    </>
  );
};
export default TestPage;
