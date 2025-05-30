import type { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type = "text",
  className,
  ...props
}) => {
  return (
    <input type={type} className={`${styles.input} ${className}`} {...props} />
  );
};

export default Input;
