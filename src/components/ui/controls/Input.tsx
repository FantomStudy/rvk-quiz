import type { FC, InputHTMLAttributes } from "react";

import styles from "./сontrols.module.css";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type = "text",
  className,
  ...props
}) => {
  return (
    <input type={type} className={`${styles.base} ${className}`} {...props} />
  );
};

export default Input;
