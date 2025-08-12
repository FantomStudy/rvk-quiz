import { useEffect, useState } from "react";

import { Select } from "@/components/ui";

import type { ProtocolName } from "./types";

import { PROTOCOLS, STORAGE_KEY } from "./const";

import styles from "../../statistic.module.css";

export const PracticeStatePage = () => {
  const [selected, setSelected] = useState<ProtocolName>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (saved as ProtocolName) : "avrMechanic";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, selected);
  }, [selected]);

  const table = PROTOCOLS[selected];

  return (
    <div className="container">
      <p className={styles.title}>{PROTOCOLS[selected].name}</p>

      <div className={styles.wrapper}>
        <Select
          selectSize="s"
          value={selected}
          onChange={(e) => setSelected(e.target.value as ProtocolName)}
        >
          {Object.entries(PROTOCOLS).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name}
            </option>
          ))}
        </Select>
        {table.element}
      </div>
    </div>
  );
};
