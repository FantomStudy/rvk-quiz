import type { ChangeEvent, ComponentProps } from "react";

import { useRef, useState } from "react";

import { useDebounceCallback } from "@/shared/hooks";

import styles from "./EditableCell.module.css";

interface EditableCellProps extends ComponentProps<"td"> {
  initialValue: string;
  isTime?: boolean;
  save: (value: string) => void;
}

export const EditableCell = ({
  save,
  isTime,
  initialValue,
  ...props
}: EditableCellProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const startEditing = () => {
    setIsEditing(true);
    if (initialValue === "0") {
      setValue("");
    }
  };
  const stopEditing = () => setIsEditing(false);

  const debauncedSave = useDebounceCallback(() => save(value), 500);

  const formatTimeValue = (input: string, cursorPosition: number) => {
    const cleanValue = input.replace(/[^\d:]/g, "");

    const validateTimeValue = (value: string, shouldPad: boolean = false) => {
      if (!value) return "";
      const num = Number.parseInt(value, 10);
      if (Number.isNaN(num) || num < 0) return "";
      if (num > 59) return "59";
      return shouldPad ? value.padStart(2, "0") : value;
    };

    if (cleanValue.includes(":")) {
      const parts = cleanValue.split(":");
      let minutes = parts[0]?.slice(0, 2) || "";
      let seconds = parts[1]?.slice(0, 2) || "";

      if (minutes.length >= 1) {
        minutes = validateTimeValue(minutes);
      }
      if (seconds.length >= 1) {
        seconds = validateTimeValue(seconds);
      }

      const formatted = `${minutes}:${seconds}`;
      return { value: formatted, cursorPosition };
    }

    const digits = cleanValue.replace(/:/g, "");
    if (digits.length <= 2) {
      return { value: digits, cursorPosition };
    }

    let minutes = digits.slice(0, 2);
    let seconds = digits.slice(2, 4);

    minutes = validateTimeValue(minutes);
    seconds = validateTimeValue(seconds);

    const formatted = `${minutes}:${seconds}`;

    let newCursorPosition = cursorPosition;
    if (cursorPosition > 2 && !input.includes(":")) {
      newCursorPosition = cursorPosition + 1;
    }

    return { value: formatted, cursorPosition: newCursorPosition };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debauncedSave();
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cursorPosition = e.target.selectionStart || 0;

    const { value: formattedValue, cursorPosition: newCursorPosition } =
      formatTimeValue(inputValue, cursorPosition);

    setValue(formattedValue);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(
          newCursorPosition,
          newCursorPosition,
        );
      }
    }, 0);

    debauncedSave();
  };

  if (isEditing) {
    return (
      <td className={styles.editable} {...props}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          value={value}
          autoFocus
          onBlur={stopEditing}
          onChange={isTime ? handleTimeChange : handleChange}
        />
      </td>
    );
  }

  return (
    <td className={styles.cell} onClick={startEditing} {...props}>
      {value}
    </td>
  );
};
