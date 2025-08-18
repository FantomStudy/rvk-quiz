import type { SortConfig, SortDirection } from "@/shared/hooks/useTableSort";

import styles from "./SortableHeader.module.css";

interface SortableHeaderProps {
  children: React.ReactNode;
  className?: string;
  sortConfig: SortConfig | null;
  sortKey: string;
  onSort: (key: string) => void;
}

export const SortableHeader = ({
  children,
  sortKey,
  sortConfig,
  onSort,
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement> & SortableHeaderProps) => {
  const isActive = sortConfig?.key === sortKey;
  const direction = isActive ? sortConfig.direction : null;

  const getSortIcon = (sortDirection: SortDirection | null) => {
    if (!sortDirection) return "↕️";
    return sortDirection === "asc" ? "↑" : "↓";
  };

  return (
    <th
      className={`${styles.sortableHeader} ${className || ""} ${isActive ? styles.active : ""}`}
      onClick={() => onSort(sortKey)}
      {...props}
    >
      <div className={styles.headerContent}>
        <span>{children}</span>
        <span className={styles.sortIcon}>{getSortIcon(direction)}</span>
      </div>
    </th>
  );
};
