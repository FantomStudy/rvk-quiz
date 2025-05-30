import type { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "s" | "m" | "l";
  color?: "primary" | "secondary" | "danger";
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  size = "s",
  color = "primary",
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
