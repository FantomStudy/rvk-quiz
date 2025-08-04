export const getSum = (arr: number[]) =>
  arr.reduce((acc, current) => {
    return acc + current;
  }, 0);
