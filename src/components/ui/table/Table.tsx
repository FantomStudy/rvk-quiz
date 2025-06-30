import type { FC, TableHTMLAttributes } from "react";

import styles from "./Table.module.css";

const Table: FC<TableHTMLAttributes<HTMLTableElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.tableContainer} ${className}`}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export default Table;
