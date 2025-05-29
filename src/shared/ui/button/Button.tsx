import type { HTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: "s" | "m" | "l";
  color?: "primary" | "secondary" | "danger";
}

export const Button = ({
  children,
  size = "s",
  color = "primary",
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]} ${className}}`}
    >
      {children}
    </button>
  );
};
