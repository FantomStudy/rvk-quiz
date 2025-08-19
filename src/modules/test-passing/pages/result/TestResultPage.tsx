import { ButtonLink } from "@/components/ui";
import { ResultsTable } from "@/components/widgets";
import { useResetResults, useResetSession, useResults } from "@/store";

import styles from "./TestResultPage.module.css";

export const TestResultPage = () => {
  const resetTest = useResetResults();
  const resetSession = useResetSession();

  const result = useResults();
  if (!result) {
    return "Результаты теста недоступны";
  }

  const handleFinishTest = () => {
    resetTest();
    resetSession();
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>
        Чтобы сохранить результат, обратитесь к администратору и сообщите своё
        ФИО и номер участника
      </h2>

      <h2 style={{ textAlign: "center", marginBottom: 30 }}>
        Вы можете ознакомиться с результатами и сфотографировать их
      </h2>

      <ResultsTable
        userId={result.user.id}
        nominationId={result.nomination.id}
      />

      <div className={styles.buttonContainer}>
        <ButtonLink className={styles.button} onClick={handleFinishTest} to="/">
          Завершить тестирование
        </ButtonLink>
      </div>
    </div>
  );
};
