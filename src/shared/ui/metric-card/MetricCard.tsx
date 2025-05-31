import type { FC } from "react";

import styles from "./MetricCard.module.css";

interface MetricCardProps {
  value?: string | number;
  descriptor?: string;
}

const MetricCard: FC<MetricCardProps> = ({ value, descriptor }) => {
  return (
    <div className={styles.container}>
      <p className={styles.descriptor}>{descriptor}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default MetricCard;
