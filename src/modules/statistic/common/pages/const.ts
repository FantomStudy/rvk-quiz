import type { ResultMap } from "./types";

export const STORAGE_KEY = "selected-result";

export const FINAL_RESULTS: ResultMap = {
  avrMechanic: {
    name: "Лучшая бригада  АВР по водопроводным сетям - 2025",
    path: "avr-mechanic",
    type: "branch",
  },
  avrSewer: {
    name: "Лучшая бригада АВР по канализационным сетям - 2025",
    path: "avr-sewer",
    type: "branch",
  },
  avrPlumber: {
    name: "Лучший слесарь АВР по водопроводным сетям - 2025",
    path: "avr-plumber",
  },
  avrSewerPlumber: {
    name: "Лучший слесарь АВР по канализационным сетям - 2025",
    path: "avr-sewer-plumber",
  },
  driverB: {
    name: "Лучший водитель автомобиля (легкового) - 2025",
    path: "car-driver",
  },
  driverC: {
    name: "Лучший водитель автомобиля (грузового) - 2025",
    path: "truck-driver",
  },
  chemLabTecnician: {
    name: "Лучший лаборант химического анализа - 2025",
    path: "chem-lab-technician",
  },
  welder: {
    name: "Лучший сварщик - 2025",
    path: "welder",
  },
};
