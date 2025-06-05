import { useEffect, useState } from "react";

import styles from "../pages/test/TestPage.module.css";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className={styles.time}>
      <p>Текущее время:</p>
      <p className={styles.active}>{currentTime}</p>
    </div>
  );
};

export default CurrentTime;
