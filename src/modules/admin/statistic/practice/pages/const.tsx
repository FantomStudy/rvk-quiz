import type { ProtocolMap } from "../types";

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
    element: (props) => <AvrMechanic {...props} />,
  },
  avrSewer: {
    name: "Лучшая бригада АВР по канализационным сетям - 2025",
    element: (props) => <AvrSewer {...props} />,
  },
  avrPlumber: {
    name: "Лучший слесарь АВР по водопроводным сетям - 2025",
    element: (props) => <AvrPlumber {...props} />,
  },
  avrSewerPlumber: {
    name: "Лучший слесарь АВР по канализационным сетям - 2025",
    element: (props) => <AvrSewerPlumber {...props} />,
  },
  driverB: {
    name: "Лучший водитель автомобиля (легкового) - 2025",
    element: (props) => <CarDriver {...props} />,
  },
  driverC: {
    name: "Лучший водитель автомобиля (грузового) - 2025",
    element: (props) => <TruckDriver {...props} />,
  },
  chemLabTecnician: {
    name: "Лучший лаборант химического анализа - 2025",
    element: (props) => <ChemLabTechnician {...props} />,
  },
  welder: {
    name: "Лучший сварщик - 2025",
    element: (props) => <Welder {...props} />,
  },
};

export const chairman = "Перфильев В.П.";
export const viceChairman = "Березнев К.А.";
export const members = [
  "Крекер В.Н.",
  "Ермолаева С.Э.",
  "Родин Н.В.",
  "Неумоин А.В.",
  "Власов Д.С.",
  "Ленченков Ю.А.",
  "Бесполденов О.А.",
  "Голиченко С.В.",
  "Бычков Д.А.",
  "Петров А.А.",
  "Москалев П.А.",
];
