import type { ComponentProps } from "react";

import styles from "./Controls.module.css";

export const Input = ({
  type = "text",
  className,
  ...props
}: ComponentProps<"input">) => (
  <input
    type={type}
    className={`${styles.base} ${className ?? ""}`}
    {...props}
  />
);
