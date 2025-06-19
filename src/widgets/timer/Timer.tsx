import { useEffect, useState } from "react";

import styles from "./Timer.module.css";

interface TimerProps {
  duration: string;
  onEnd: () => void;
}

const parseDuration = (duration: string) => {
  const [hours, minutes, seconds] = duration.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

const Timer = ({ duration, onEnd }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => parseDuration(duration));

  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onEnd]);

  const formatTime = () => {
    const h = Math.floor(timeLeft / 3600);
    const m = Math.floor((timeLeft % 3600) / 60);
    const s = timeLeft % 60;
    const pad = (n: number) => String(n).padStart(2, "0");

    return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
  };

  return (
    <div className={styles.timer}>
      <img src="./icons/clock.svg" alt="clock" />
      <p>{formatTime()}</p>
    </div>
  );
};

export default Timer;
