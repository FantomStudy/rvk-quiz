import { useEffect, useState } from "react";

import { Button, Select } from "@/components/ui";

import type { ProtocolName, SortBy } from "../types";

import {
  chairman,
  members,
  PROTOCOLS,
  STORAGE_KEY,
  viceChairman,
} from "./const";

import styles from "../../statistic.module.css";

export const PracticePage = () => {
  const [selected, setSelected] = useState<ProtocolName>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (saved as ProtocolName) : "avrMechanic";
  });

  const [sortBy, setSortBy] = useState<SortBy>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, selected);
  }, [selected]);

  const table = PROTOCOLS[selected];

  const toggleSort = (field: "lineNumber" | "place") => {
    setSortBy((prev) => (prev === field ? null : field));
  };

  return (
    <div className="container">
      <p className={styles.title}>{PROTOCOLS[selected].name}</p>

      <div className={styles.wrapper}>
        <div className={styles.controls}>
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
          <Button size="s" onClick={window.print}>
            Распечатать
          </Button>
          <Button size="s" onClick={() => toggleSort("lineNumber")}>
            Сортировка по линии {sortBy === "lineNumber" ? "✓" : ""}
          </Button>
          <Button size="s" onClick={() => toggleSort("place")}>
            Сортировка по месту {sortBy === "place" ? "✓" : ""}
          </Button>
        </div>

        <div className={`${styles.tableContainer} `}>
          {table.element({ sortBy })}
        </div>

        <div className={styles.signatures}>
          <p>Председатель конкурсной комиссии</p>
          <div className={styles.centerSign}>
            <p className={styles.signaturePlace}>{chairman}</p>
          </div>

          <p>Заместитель председателя конкурсной комиссии</p>
          <div className={styles.centerSign}>
            <p className={styles.signaturePlace}>{viceChairman}</p>
          </div>

          <p>Члены конкурсной комиссии</p>
          <div className={styles.signatureSubgrid}>
            {members.map((member) => (
              <p key={member} className={styles.signaturePlace}>
                {member}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
