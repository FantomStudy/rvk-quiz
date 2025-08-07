import type { SelectProps } from "./types";

import styles from "../Controls.module.css";

export const Select = ({
  children,
  className,
  selectSize = "m",
  ...props
}: SelectProps) => {
  return (
    <select
      className={`${styles.base} ${styles[selectSize]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </select>
  );
};
