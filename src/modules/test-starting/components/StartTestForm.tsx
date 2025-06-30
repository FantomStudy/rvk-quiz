import { useNominationList } from "@/api/nominations/queries";
import { Button, Input, Select } from "@/components/ui";

import { useStartTestForm } from "./useStartTestForm";
import styles from "./StartTestForm.module.css";

export const StartTestForm = () => {
  const { form, handleChange, handleSubmit } = useStartTestForm();
  const { data: nominations, isLoading, isError } = useNominationList();

  const selectedNomination = nominations?.find(
    (nomination) => nomination.id === Number(form.nominationId),
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nomination">Номинация</label>
      <Select
        required
        id="nomination"
        name="nominationId"
        value={form.nominationId}
        onChange={handleChange}
        disabled={isLoading}
      >
        <option value="" disabled>
          {isLoading
            ? "Загрузка..."
            : isError
              ? "Не удалось загрузить номинации"
              : "Выберите номинацию"}
        </option>

        {nominations?.map((nomination) => (
          <option key={nomination.id} value={nomination.id}>
            {nomination.name}
          </option>
        ))}
      </Select>

      <label htmlFor="user">Номер участника</label>
      <Input
        required
        id="user"
        name="number"
        value={form.number}
        onChange={handleChange}
      />

      {selectedNomination && (
        <div className={styles.time}>
          <p>Время на прохождение теста:</p>
          <p className={styles.primaryText}>{selectedNomination.duration}</p>
        </div>
      )}

      <Button size="l" className={styles.button}>
        Начать тест
      </Button>
    </form>
  );
};
