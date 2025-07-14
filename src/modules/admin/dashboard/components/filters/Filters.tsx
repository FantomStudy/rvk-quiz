import type { ChangeEvent } from "react";

import { useBranchList } from "@/api/branches/queries";
import { useNominationList } from "@/api/nominations/queries";
import { Select } from "@/components/ui";

import type { DashboardFilters } from "../../dashboard";
import styles from "./Filters.module.css";

interface FiltersProps {
  filters: DashboardFilters;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Filters = ({ filters, onChange }: FiltersProps) => {
  const branchList = useBranchList();
  const nominationList = useNominationList();

  return (
    <div className={styles.filterWrapper}>
      <Select
        className={styles.selectMini}
        name="branchId"
        value={filters.branchId}
        onChange={onChange}
        disabled={branchList.isLoading || branchList.isError}
      >
        <option value="">
          {branchList.isLoading
            ? "Загрузка..."
            : branchList.isError
              ? "Загрузка не удалась"
              : "Все филиалы"}
        </option>
        {branchList.data?.map((branch) => (
          <option key={branch.id} value={branch.id}>
            {branch.address}
          </option>
        ))}
      </Select>

      <Select
        className={styles.selectMini}
        name="nominationId"
        value={filters.nominationId}
        onChange={onChange}
        disabled={nominationList.isLoading || nominationList.isError}
      >
        <option value="">
          {nominationList.isLoading
            ? "Загрузка..."
            : nominationList.isError
              ? "Загрузка не удалась"
              : "Все номинации"}
        </option>
        {nominationList.data?.map((nomination) => (
          <option key={nomination.id} value={nomination.id}>
            {nomination.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Filters;
