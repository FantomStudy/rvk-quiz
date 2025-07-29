import type { ChangeEvent, ComponentProps } from "react";

import { useRef, useState, useEffect } from "react";

import styles from "./EditableCell.module.css";

interface SelectableCellProps extends ComponentProps<"td"> {
  initialValue: string;
  label: string;
  options: { label: string; value: number }[];
  save: (value: number) => void;
}

export const SelectableCell = ({
  save,
  label,
  options,
  initialValue,
  ...props
}: SelectableCellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const selectRef = useRef<HTMLSelectElement>(null);

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  useEffect(() => {
    if (isEditing && selectRef.current) {
      const selectElement = selectRef.current;
      selectElement.focus();

      const openDropdown = () => {
        if (
          "showPicker" in selectElement &&
          typeof selectElement.showPicker === "function"
        ) {
          selectElement.showPicker();
          return;
        }
      };

      setTimeout(openDropdown, 50);
    }
  }, [isEditing]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    save(Number(e.target.value));
  };

  if (isEditing) {
    return (
      <td className={styles.editable} {...props}>
        <select
          ref={selectRef}
          className={styles.select}
          value={value}
          onBlur={stopEditing}
          onChange={handleChange}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </td>
    );
  }

  return (
    <td onClick={startEditing} {...props}>
      {options.find((option) => option.value.toString() === value)?.label}
    </td>
  );
};
