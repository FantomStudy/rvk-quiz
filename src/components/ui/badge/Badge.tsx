import type { HTMLAttributes } from "react";

import clsx from "clsx";

import styles from "./Badge.module.css";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: "primary" | "secondary";
}

export const Badge = ({
  children,
  className,
  color = "primary",
  ...props
}: BadgeProps) => {
  return (
    <span className={clsx(styles.badge, styles[color], className)} {...props}>
      {children}
    </span>
  );
};
