import type { ComponentProps } from "react";

import styles from "./Table.module.css";

interface TableProps extends ComponentProps<"div"> {
  height?: number | string;
}

export const Table = ({ children, className, height }: TableProps) => {
  return (
    <div className={`${styles.tableContainer} ${className}`} style={{ height }}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};
