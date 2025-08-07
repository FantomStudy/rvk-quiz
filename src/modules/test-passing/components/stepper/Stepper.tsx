import { Badge, Button } from "@/components/ui";
import { Timer } from "@/components/widgets";
import { useAnswersStore, useStepControls } from "@/store";

import { useFinishTest } from "../../api";
import { useProgress, useSessionMeta } from "./hooks";

import styles from "./Stepper.module.css";

export const Stepper = () => {
  const { step, nomination, finishedAt, totalQuestions } = useSessionMeta();
  const progress = useProgress();

  const isLast = step === totalQuestions - 1;

  const controls = useStepControls();
  const finishTest = useFinishTest();

  const handleComplete = () =>
    finishTest.mutate(useAnswersStore.getState().answers);

  const handleNextStep = () => {
    if (!isLast) {
      controls.nextStep();
      return;
    }

    handleComplete();
  };

  return (
    <>
      <div className={styles.infoWrapper}>
        <Badge color="primary">{nomination.name}</Badge>
        <Badge color="secondary">
          Вопрос {step + 1} из {totalQuestions}
        </Badge>
        <Timer finishedAt={finishedAt} onComplete={handleComplete} />
      </div>

      <div className={styles.progressContainer}>
        <Button
          disabled={step === 0}
          size="s"
          variant="outline"
          onClick={controls.prevStep}
        >
          Назад
        </Button>

        <div className={styles.progressBar}>
          <div
            style={{
              width: `${progress}%`,
            }}
            className={styles.progressBarFill}
          ></div>
        </div>

        <Button
          className={styles.button}
          size="s"
          variant="danger"
          onClick={handleNextStep}
        >
          {isLast ? "Завершить" : "Далее"}
        </Button>
      </div>
    </>
  );
};
