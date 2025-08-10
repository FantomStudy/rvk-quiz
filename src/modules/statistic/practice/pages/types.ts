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
  { name: string; element: React.ReactNode }
>;
