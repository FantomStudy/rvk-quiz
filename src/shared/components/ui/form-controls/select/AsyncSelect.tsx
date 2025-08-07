import { useQuery } from "@tanstack/react-query";

import type { AsyncSelectProps } from "./types";

import { Select } from "./Select";

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
      <option value="">
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
