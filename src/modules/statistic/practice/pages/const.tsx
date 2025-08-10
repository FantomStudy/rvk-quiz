import type { ProtocolMap } from "./types";

import {
  AvrMechanic,
  AvrPlumber,
  AvrSewer,
  AvrSewerPlumber,
  CarDriver,
  ChemLabTechnician,
  TruckDriver,
  Welder,
} from "../components";

export const STORAGE_KEY = "selected-protocol";

export const PROTOCOLS: ProtocolMap = {
  avrMechanic: {
    name: "Лучшая бригада  АВР по водопроводным сетям - 2025",
    element: <AvrMechanic />,
  },
  avrSewer: {
    name: "Лучшая бригада АВР по канализационным сетям - 2025",
    element: <AvrSewer />,
  },
  avrPlumber: {
    name: "Лучший слесарь АВР по водопроводным сетям - 2025",
    element: <AvrPlumber />,
  },
  avrSewerPlumber: {
    name: "Лучший слесарь АВР по канализационным сетям - 2025",
    element: <AvrSewerPlumber />,
  },
  driverB: {
    name: "Лучший водитель автомобиля (легкового) - 2025",
    element: <CarDriver />,
  },
  driverC: {
    name: "Лучший водитель автомобиля (грузового) - 2025",
    element: <TruckDriver />,
  },
  chemLabTecnician: {
    name: "Лучший лаборант химического анализа - 2025",
    element: <ChemLabTechnician />,
  },
  welder: {
    name: "Лучший сварщик - 2025",
    element: <Welder />,
  },
};
