import type { ComponentProps } from "react";

import { useState } from "react";

import { ComboBox } from "../../form-controls/combobox/Combobox";

import styles from "./EditableCell.module.css";

interface ComboBoxCellProps extends ComponentProps<"td"> {
  initialValue: string;
  options: { id: number; text: string }[];
  save: (value: { id: number; text: string }) => void;
}

export const ComboBoxCell = ({
  save,
  options,
  initialValue,
  ...props
}: ComboBoxCellProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  if (isEditing) {
    return (
      <td className={styles.editable} {...props}>
        <ComboBox
          inputClassName={styles.input}
          value={initialValue}
          autoFocus
          onSelect={(opt) => {
            save(opt);
            stopEditing();
          }}
          options={options}
        />
      </td>
    );
  }

  return (
    <td className={styles.cell} onClick={startEditing} {...props}>
      {initialValue}
    </td>
  );
};
