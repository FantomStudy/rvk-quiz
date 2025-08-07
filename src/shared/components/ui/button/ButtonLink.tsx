import { Link } from "@tanstack/react-router";

import type { ButtonLinkProps } from "./Button.types";

import styles from "./Button.module.css";

export const ButtonLink = ({
  to = "/",
  size = "m",
  variant = "primary",
  children,
  className,
  ...props
}: ButtonLinkProps) => (
  <Link
    className={`${styles.base} ${styles[variant]} ${styles[size]} ${className ?? ""}`}
    to={to}
    {...props}
  >
    {children}
  </Link>
);
