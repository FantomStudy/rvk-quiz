import type { FC, SelectHTMLAttributes } from "react";

import styles from "./Input.module.css";

const Radio: FC<SelectHTMLAttributes<HTMLInputElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <input type="radio" className={`${styles.radio} ${className}`} {...props}>
      {children}
    </input>
  );
};

export default Radio;
