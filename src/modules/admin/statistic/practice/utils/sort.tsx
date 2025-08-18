export const sortByLine = (arr: [{ lineNumber: number }]) =>
  arr.sort((a, b) => b.lineNumber - a.lineNumber);

export const sortByPlace = (arr: [{ place: number }]) =>
  arr.sort((a, b) => a.place - b.place);
