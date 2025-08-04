import type { ComponentProps } from "react";

import { useEffect, useRef, useState } from "react";

import { formatTime } from "./timeHelper";

import styles from "./Timer.module.css";

interface TimerProps extends ComponentProps<"div"> {
  finishedAt: string;
  onComplete: () => void;
}

export const Timer = ({ finishedAt, className, onComplete }: TimerProps) => {
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

  return (
    <div className={`${styles.base} ${className ?? ""}`}>
      <img alt="clock-icon" src="/icons/clock.svg" />
      {formatTime(timeLeft)}
    </div>
  );
};
