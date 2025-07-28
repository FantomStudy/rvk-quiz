import type { ComponentProps } from "react";

import styles from "./Controls.module.css";

export const Select = ({
  children,
  className,
  ...props
}: ComponentProps<"select">) => {
  return (
    <select className={`${styles.base} ${className ?? ""}`} {...props}>
      {children}
    </select>
  );
};
