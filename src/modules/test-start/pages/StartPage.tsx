import { useEffect } from "react";

import { useResetResults, useResetSession } from "@/store";

import { StartTestForm } from "../components/start-form/StartForm";

import styles from "./StartPage.module.css";

export const StartPage = () => {
  const resetTest = useResetResults();
  const resetSession = useResetSession();
  
  useEffect(() => {
    resetTest();
    resetSession();
  }, []);

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
      <img alt="wave-mask" className={styles.waveMask} src="/wave-mask.png" />
    </>
  );
};
