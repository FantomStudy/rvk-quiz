import type { FC, PropsWithChildren } from "react";

import styles from "./Table.module.css";

const Table: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export default Table;
