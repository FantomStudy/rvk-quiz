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
          <div className={styles.signatureItem}>
            <p>Председатель конкурсной комиссии</p>
            <p className={styles.signaturePlace}>{chairman}</p>
          </div>
          <div className={styles.signatureItem}>
            <p>Заместитель председателя конкурсной комиссии</p>
            <p className={styles.signaturePlace}>{viceChairman}</p>
          </div>
          <div className={styles.signatureItem}>
            <p>Члены конкурсной комиссии</p>
            <div className={styles.signatureGrid}>
              {members.map((member) => (
                <p key={member} className={styles.signaturePlace}>
                  {member}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* {isPrintMode && (
            <div className={styles.signatures}>
              <div className={styles.signatureOfficials}>
                <div className={styles.signatureOfficial}>
                  <span className={styles.signatureSpace}>_______________</span>
                  <span className={styles.signatureName}>{chairman}</span>
                  <span className={styles.signatureTitle}>
                    Председатель конкурсной комиссии
                  </span>
                </div>

                <div className={styles.signatureOfficial}>
                  <span className={styles.signatureSpace}>_______________</span>
                  <span className={styles.signatureName}>{viceChairman}</span>
                  <span className={styles.signatureTitle}>
                    Заместитель председателя конкурсной комиссии
                  </span>
                </div>
              </div>

              <h4 className={styles.membersTitle}>Члены комиссии:</h4>
              <div className={styles.signatureGrid}>
                {members.map((member) => (
                  <div key={member} className={styles.signatureLine}>
                    <span className={styles.signatureSpace}>
                      _______________
                    </span>
                    <span className={styles.signatureName}>{member}</span>
                  </div>
                ))}
              </div>
            </div>
          )} 
        </div>*/}
      </div>
    </div>
  );
};
