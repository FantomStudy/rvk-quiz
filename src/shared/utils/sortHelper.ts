type SortKey<T> = keyof T | null;

export const sortWithEmptyLast = <T>(data: T[], key: SortKey<T>) => {
  if (key === null) return data;

  return data.slice().sort((a, b) => {
    const av = a[key];
    const bv = b[key];

    if (av == null && bv == null) return 0;
    if (av == null) return 1;
    if (bv == null) return -1;

    if (typeof av === "number" && typeof bv === "number") {
      return av - bv;
    }

    return 0;
  });
};
