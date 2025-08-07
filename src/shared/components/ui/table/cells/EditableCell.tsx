import type { ChangeEvent, ComponentProps } from "react";

import { useState } from "react";

import { useDebounceCallback } from "@/shared/hooks";

import styles from "./EditableCell.module.css";

interface EditableCellProps extends ComponentProps<"td"> {
  initialValue: string;
  save: (value: string) => void;
}

export const EditableCell = ({
  save,
  initialValue,
  ...props
}: EditableCellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  const debauncedSave = useDebounceCallback(() => save(value), 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debauncedSave();
  };

  if (isEditing) {
    return (
      <td className={styles.editable} {...props}>
        <input
          type="text"
          className={styles.input}
          value={value}
          autoFocus
          onBlur={stopEditing}
          onChange={handleChange}
        />
      </td>
    );
  }

  return (
    <td onClick={startEditing} {...props}>
      {value}
    </td>
  );
};
