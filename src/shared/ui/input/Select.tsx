import type { FC, SelectHTMLAttributes } from "react";

import styles from "./Input.module.css";

const Select: FC<SelectHTMLAttributes<HTMLSelectElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <select className={`${styles.select} ${className}`} {...props}>
      {children}
    </select>
  );
};

export default Select;
