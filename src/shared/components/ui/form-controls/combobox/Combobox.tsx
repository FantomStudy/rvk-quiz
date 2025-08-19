import type { KeyboardEvent } from "react";

import { useEffect, useRef, useState } from "react";

import styles from "./Combobox.module.css";

interface ComboBoxProps {
  autoFocus?: boolean;
  inputClassName?: string;
  menuClassName?: string;
  options: ComboBoxOption[];
  value?: string;
  onSelect: (value: ComboBoxOption) => void;
}

interface ComboBoxOption {
  id: number;
  text: string;
}

export const ComboBox = ({
  options,
  value = "",
  inputClassName,
  menuClassName,
  onSelect,
  autoFocus = false,
}: ComboBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options
    .filter((opt) => opt.text.toLowerCase().includes(inputValue.toLowerCase()))
    .slice(0, 5);

  const handleSelect = (option: ComboBoxOption) => {
    setInputValue(option.text);
    setIsOpen(false);
    onSelect(option);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Enter":
        if (isOpen && filteredOptions.length > 0) {
          handleSelect(filteredOptions[0]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div ref={ref} className={styles.combobox}>
      <input
        type="text"
        className={`${styles.input} ${inputClassName}`}
        value={inputValue}
        autoFocus={autoFocus}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
      />

      {isOpen && filteredOptions.length > 0 && (
        <ul className={`${styles.menu} ${menuClassName}`}>
          {filteredOptions.map((opt) => (
            <li
              key={opt.id}
              className={styles.item}
              onClick={() => handleSelect(opt)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {opt.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
