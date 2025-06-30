import type { FC, TextareaHTMLAttributes } from "react";

import styles from "./сontrols.module.css";

const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => {
  return (
    <textarea
      className={`${styles.base} ${styles.textarea} ${className}`}
      {...props}
    />
  );
};

export default Textarea;
