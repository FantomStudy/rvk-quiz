import type { ComponentProps } from "react";

import styles from "./Badge.module.css";

interface BadgeProps extends ComponentProps<"span"> {
  color?: "primary" | "secondary";
}

export const Badge = ({
  children,
  className,
  color = "primary",
  ...props
}: BadgeProps) => {
  return (
    <span
      className={`${styles.base} ${styles[color]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </span>
  );
};
