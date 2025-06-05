
import { useEffect, useState } from "react";

import styles from "../pages/test/TestPage.module.css";

const Timer = ({ initialMinutes = 45, initialSeconds = 30 }) => {
  const [timeLeft, setTimeLeft] = useState(
    initialMinutes * 60 + initialSeconds,
  );

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Время истекло!");
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); 
  }, [timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes} мин ${seconds} сек`;
  };

  return (
    <div className={styles.timer}>
      <img src="./icons/clock.svg" alt="clock" />
      <p>{formatTime()}</p>
    </div>
  );
};

export default Timer;
