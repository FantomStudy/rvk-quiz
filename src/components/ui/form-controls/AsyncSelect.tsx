import type { UseQueryOptions } from "@tanstack/react-query";
import type { ComponentProps } from "react";

import { useQuery } from "@tanstack/react-query";

import { Select } from "./Select";

interface Option {
  label: string;
  value: number | string;
}

interface AsyncSelectProps<T> extends ComponentProps<"select"> {
  errorSlot?: string;
  loadingSlot?: string;
  placeholder?: string;
  queryOptions: UseQueryOptions<T[]>;
  mapItems: (item: T) => Option;
}

export const AsyncSelect = <T,>({
  mapItems,
  queryOptions,
  placeholder = "Выберите опцию",
  errorSlot = "Не удалось загрузить данные",
  loadingSlot = "Загрузка...",
  ...props
}: AsyncSelectProps<T>) => {
  const { data, isLoading, isError } = useQuery(queryOptions);

  return (
    <Select {...props}>
      <option disabled value="">
        {isLoading ? loadingSlot : isError ? errorSlot : placeholder}
      </option>

      {data &&
        data?.map((item) => {
          const option = mapItems(item);
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
    </Select>
  );
};
