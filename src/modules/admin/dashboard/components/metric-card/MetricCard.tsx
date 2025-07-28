import type { ComponentProps } from "react";

import styles from "./MetricCard.module.css";

interface MetricCardProps extends ComponentProps<"div"> {
  descriptor?: string;
  value?: number | string;
}

export const MetricCard = ({
  className,
  descriptor,
  value,
  ...props
}: MetricCardProps) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <p className={styles.descriptor}>{descriptor}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};
