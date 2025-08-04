import type { UseQueryOptions } from "@tanstack/react-query";
import type { ComponentProps } from "react";

export interface SelectProps extends ComponentProps<"select"> {
  selectSize?: "m" | "s";
}

export interface AsyncSelectProps<T> extends SelectProps {
  errorSlot?: string;
  loadingSlot?: string;
  placeholder?: string;
  queryOptions: UseQueryOptions<T[]>;
  mapItems: (item: T) => Option;
}

interface Option {
  label: string;
  value: number | string;
}
