import type { ComponentProps } from "react";

import styles from "./Skeleton.module.css";

interface SkeletonProps extends ComponentProps<"div"> {
  borderRadius?: number | string;
  height?: number | string;
  width?: number | string;
}

export const Skeleton = ({
  width = "100%",
  height = "1em",
  borderRadius = 5,
  className,
  style,
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={`${styles.skeleton} ${className ?? ""}`}
      style={{ width, height, borderRadius, ...style }}
      {...props}
    />
  );
};
