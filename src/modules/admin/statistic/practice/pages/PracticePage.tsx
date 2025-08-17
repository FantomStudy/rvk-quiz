import { useEffect, useState } from "react";

import { Button, Select } from "@/components/ui";

import type { ProtocolName } from "./types";

import { PROTOCOLS, STORAGE_KEY } from "./const";

import styles from "../../statistic.module.css";

const chairman = "Перфильев В.П.";
const viceChairman = "Березнев К.А.";
const members = [
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

export const PracticePage = () => {
  const [selected, setSelected] = useState<ProtocolName>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (saved as ProtocolName) : "avrMechanic";
  });

  const [isPrintMode, setIsPrintMode] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, selected);
  }, [selected]);

  const table = PROTOCOLS[selected];

  const handlePrint = () => {
    setIsPrintMode(true);
    setTimeout(() => {
      window.print();
    }, 200);
  };

  const handleAfterPrint = () => {
    setIsPrintMode(false);
  };

  useEffect(() => {
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <div className="container">
      <div
        className={`${styles.printContainer} ${isPrintMode ? styles.printMode : ""}`}
      >
        {isPrintMode && (
          <div className={styles.printControls}>
            <Button variant="outline" onClick={() => setIsPrintMode(false)}>
              Отменить
            </Button>
            <Button variant="primary" onClick={() => window.print()}>
              Печать
            </Button>
          </div>
        )}

        <p className={styles.title}>{PROTOCOLS[selected].name}</p>

        <div className={styles.wrapper}>
          {!isPrintMode && (
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
              <Button size="s" variant="primary" onClick={handlePrint}>
                Распечатать
              </Button>
            </div>
          )}

          <div
            className={`${styles.tableContainer} ${isPrintMode ? styles.compactTable : ""}`}
          >
            {table.element}
          </div>

          {isPrintMode && (
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
        </div>
      </div>
    </div>
  );
};
