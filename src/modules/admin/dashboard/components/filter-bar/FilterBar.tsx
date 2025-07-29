import type { ChangeEvent } from "react";

import { branchListQuery } from "@/api/branch/queries";
import { nominationListQuery } from "@/api/nomination/queries";
import { AsyncSelect } from "@/components/ui";

import type { DashboardFilters } from "../../types";

import styles from "./FilterBar.module.css";

interface FilterBarProps {
  filters: DashboardFilters;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterBar = ({ filters, onChange }: FilterBarProps) => {
  return (
    <div className={styles.wrapper}>
      <AsyncSelect
        className={styles.select}
        mapItems={(i) => ({ value: i.id, label: i.address })}
        name="branchId"
        value={filters.branchId}
        onChange={onChange}
        queryOptions={branchListQuery}
      />

      <AsyncSelect
        className={styles.select}
        mapItems={(i) => ({ value: i.id, label: i.name })}
        name="nominationId"
        value={filters.nominationId}
        onChange={onChange}
        queryOptions={nominationListQuery}
      />
    </div>
  );
};
