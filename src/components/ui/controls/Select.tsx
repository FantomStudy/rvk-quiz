import type { FC, SelectHTMLAttributes } from "react";

import styles from "./сontrols.module.css";

const Select: FC<SelectHTMLAttributes<HTMLSelectElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <select
      className={`${styles.base} ${styles.select} ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
