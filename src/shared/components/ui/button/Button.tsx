import type { ButtonProps } from "./Button.types";

import styles from "./Button.module.css";

export const Button = ({
  size = "m",
  type = "button",
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={`${styles.base} ${styles[variant]} ${styles[size]} ${className ?? ""}`}
    {...props}
  >
    {children}
  </button>
);
