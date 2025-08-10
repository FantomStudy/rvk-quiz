import type { ComponentProps } from "react";

import { useState } from "react";

import styles from "./EditableCell.module.css";

interface CheckableCellProps extends ComponentProps<"td"> {
  initialValue: boolean;
  save: (value: boolean) => void;
}

export const CheckableCell = ({
  initialValue,
  save,
  ...props
}: CheckableCellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(initialValue);

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    save(e.target.checked);
  };

  if (isEditing) {
    return (
      <td className={styles.editable} {...props}>
        <input
          type="checkbox"
          checked={checked}
          className={styles.input}
          autoFocus
          onBlur={stopEditing}
          onChange={handleChange}
        />
      </td>
    );
  }

  return (
    <td className={styles.cell} onClick={startEditing} {...props}>
      <span>{checked ? "+" : "-"}</span>
    </td>
  );
};
