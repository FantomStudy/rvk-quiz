import { type ChangeEvent, useState } from "react";

import type { DashboardFilters } from "../dashboard";

export const useDashboardFilters = () => {
  const [filters, setFilters] = useState<DashboardFilters>({
    branchId: "",
    nominationId: "",
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return { filters, onChange: handleChange };
};
