export type ProtocolName =
  | "avrMechanic"
  | "avrPlumber"
  | "avrSewer"
  | "avrSewerPlumber"
  | "chemLabTecnician"
  | "driverB"
  | "driverC"
  | "welder";

export type ProtocolMap = Record<
  ProtocolName,
  { name: string; element: (props: SortProps) => React.ReactNode }
>;

export type SortBy = "lineNumber" | "place" | null;

export interface SortProps {
  sortBy: SortBy;
}
