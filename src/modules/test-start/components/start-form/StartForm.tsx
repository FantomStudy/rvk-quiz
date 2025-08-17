import { useNominationList } from "@/api/nomination/queries";
import { Button, Input, Select } from "@/components/ui";

import { useStartForm } from "./useStartForm";

import styles from "./StartForm.module.css";

export const StartTestForm = () => {
  const { form, request } = useStartForm();
  const nominationList = useNominationList();

  const selected = nominationList.data?.find(
    (nomination) => nomination.id === Number(form.data.nominationId),
  );

  return (
    <form className={styles.form} onSubmit={form.handleSubmit}>
      <label htmlFor="nomination">Номинация</label>
      <Select
        required
        id="nomination"
        name="nominationId"
        value={form.data.nominationId}
        onChange={form.handleChange}
      >
        <option disabled value="">
          {nominationList.isLoading
            ? "Загрузка..."
            : nominationList.isError
              ? "Не удалось загрузить номинации"
              : "Выберите номинацию"}
        </option>

        {nominationList.data &&
          nominationList.data?.map((nomination) => (
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
        value={form.data.number}
        onChange={form.handleChange}
      />

      {selected && (
        <div className={styles.time}>
          <p>Время на прохождение теста:</p>
          <p className="primaryText">{selected.duration}</p>
        </div>
      )}

      {request.error && <p>{request.error.message}</p>}

      <Button
        type="submit"
        className={styles.button}
        disabled={request.isPending}
      >
        Начать тест
      </Button>
    </form>
  );
};
