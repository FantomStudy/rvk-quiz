import type { ReactNode } from "react";

import { useState } from "react";

import { Select } from "@/components/ui";

import {
  AvrMechanic,
  AvrPlumber,
  AvrSewer,
  AvrSewerPlumber,
  ChemLabTechnician,
  Driver,
  Welder,
} from "../components";

import styles from "./PracticeStatePage.module.css";

interface Protocol {
  [name: string]: { name: string; element: ReactNode };
}

const PROTOCOLS: Protocol = {
  avrMechanic: {
    name: "Лучшая бригада  АВР по водопроводным сетям - 2025",
    element: <AvrMechanic />,
  },
  welder: {
    name: "Лучший сварщик - 2025",
    element: <Welder />,
  },
  avrPlumber: {
    name: "Лучший слесарь АВР по водопроводным сетям",
    element: <AvrPlumber />,
  },
  avrSewer: {
    name: "Лучшая бригада  АВР по канализационным сетям - 2025",
    element: <AvrSewer />,
  },
  aveSewerPlumber: {
    name: "Лучший слесарь АВР по канализационным сетям - 2025",
    element: <AvrSewerPlumber />,
  },
  driverB: {
    name: "Лучший водитель автомобиля (легкового) - 2025",
    element: <Driver />,
  },
  driverC: {
    name: "Лучший водитель автомобиля (грузового) - 2025",
    element: <Driver />,
  },
  chemLabTecnician: {
    name: "Лучший лаборант химического анализа - 2025",
    element: <ChemLabTechnician />,
  },
};

export const PracticeStatePage = () => {
  const [selected, setSelected] = useState("avrMechanic");

  const table = PROTOCOLS[selected];

  return (
    <div className="container">
      <p className={styles.title}>{PROTOCOLS[selected].name}</p>

      <div className={styles.wrapper}>
        <Select
          selectSize="s"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {Object.entries(PROTOCOLS).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name}
            </option>
          ))}
        </Select>
        {table?.element}
      </div>
    </div>
  );
};
