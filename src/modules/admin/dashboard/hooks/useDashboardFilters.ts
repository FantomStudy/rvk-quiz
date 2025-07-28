import type { ChangeEvent } from "react";

import { useState } from "react";

import type { DashboardFilters } from "../types";

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
