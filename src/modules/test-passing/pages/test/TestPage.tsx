import { QuestionView, Stepper } from "../../components";

import styles from "./TestPage.module.css";

export const TestPage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.pageContainer}>
          <div className={styles.pageWrapper}>
            <QuestionView />
            <Stepper />
          </div>
        </div>
      </div>
      <img alt="wave" className={styles.waveMask} src="/wave-mask.png" />
    </>
  );
};
