import { useMemo, useState } from "react";

export type SortDirection = "asc" | null;

export interface SortConfig {
  direction: SortDirection;
  key: string;
}

export function useTableSort<T>(data: T[], defaultSort?: SortConfig) {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(
    defaultSort || null
  );

  const sortedData = useMemo(() => {
    if (!sortConfig || !sortConfig.direction) {
      return data;
    }

    const sortedArray = [...data].sort((a, b) => {
      const aValue = getNestedValue(a, sortConfig.key);
      const bValue = getNestedValue(b, sortConfig.key);

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      if (aValue < bValue) {
        return -1; // всегда по возрастанию
      }
      if (aValue > bValue) {
        return 1; // всегда по возрастанию
      }
      return 0;
    });

    return sortedArray;
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    let direction: SortDirection = "asc";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = null; // отключить сортировку
    }

    setSortConfig(direction ? { key, direction } : null);
  };

  return {
    sortedData,
    sortConfig,
    handleSort,
  };
}

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((current, key) => {
    return current?.[key];
  }, obj);
}
