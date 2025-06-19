import { useNominations } from "@shared/hooks";
import { Button, Input, Select } from "@shared/ui";

import styles from "../../../pages/home/HomePage.module.css";
import { useStartTestForm } from "../hooks/useStartTestForm";

export const StartTestForm = () => {
  const { form, handleChange, handleSubmit } = useStartTestForm();
  const { data: nominations, isLoading, isError } = useNominations();

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
        disabled={isLoading}
        onChange={handleChange}
      >
        <option value="" disabled>
          {isLoading
            ? "Загрузка..."
            : isError
              ? "Ошибка загрузки"
              : "Выберите номинацию"}
        </option>

        {nominations?.map((nomination) => (
          <option key={nomination.id} value={nomination.id}>
            {nomination.name}
          </option>
        ))}
      </Select>

      <label htmlFor="user">Номер</label>
      <Input
        id="user"
        name="number"
        required
        value={form.number}
        onChange={handleChange}
      />

      {selectedNomination && (
        <div className={styles.time}>
          <p>Время на прохождение теста:</p>
          <p className={styles.blue}>{selectedNomination.duration}</p>
        </div>
      )}

      <Button size="l" color="primary" className={styles.button}>
        Войти
      </Button>
    </form>
  );
};
