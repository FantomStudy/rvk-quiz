import type { ButtonHTMLAttributes } from "react";

import { createLink } from "@tanstack/react-router";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "s" | "m" | "l";
  color?: "primary" | "secondary" | "danger" | "outline";
}

export const Button = ({
  children,
  className,
  size = "s",
  color = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonLink = createLink(Button);
