import { useEffect, useRef, useState } from "react";

import styles from "./Timer.module.css";

interface TimerProps {
  finishedAt: string;
  onComplete: () => void;
  className?: string;
}

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [
    h > 0 ? String(h).padStart(2, "0") : null,
    String(m).padStart(2, "0"),
    String(s).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");
}

export const Timer = ({ finishedAt, onComplete, className }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = new Date(finishedAt).getTime() - Date.now();
    return Math.max(0, diff);
  });

  const completedRef = useRef(false);

  useEffect(() => {
    if (timeLeft <= 0 && !completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  }, [timeLeft, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      const diff = new Date(finishedAt).getTime() - Date.now();
      setTimeLeft(Math.max(0, diff));
    }, 1000);
    return () => clearInterval(interval);
  }, [finishedAt, timeLeft]);

  useEffect(() => {
    setTimeLeft(Math.max(0, new Date(finishedAt).getTime() - Date.now()));
    completedRef.current = false;
  }, [finishedAt]);

  return (
    <span className={`${styles.timer} ${className}`}>
      <img src="./icons/clock.svg" alt="clock" />
      {formatTime(timeLeft)}
    </span>
  );
};
