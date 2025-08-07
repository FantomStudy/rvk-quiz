import { useResultsStore } from "./resultStore";

export const useResults = () => useResultsStore((s) => s.result);
export const useSetResults = () => useResultsStore((s) => s.setResult);
export const useResetResults = () => useResultsStore((s) => s.resetResult);
