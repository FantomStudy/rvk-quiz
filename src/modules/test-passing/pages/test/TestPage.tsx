import { Timer } from "@/components";
import { Badge, Button, Skeleton } from "@/components/ui";
import {
  useAnswerQuestion,
  useCurrentStep,
  useEnsureAnswer,
  useGetUserAnswer,
  useSessionData,
  useStepControls,
} from "@/store/selectors";
import { useTestStore } from "@/store/TestStore";

import { useFinishTest, useQuestionPhoto } from "../../api/queries";

import styles from "./TestPage.module.css";

export const TestPage = () => {
  const { user, nomination, questions, finishedAt } = useSessionData();
  const currentStep = useCurrentStep();
  const controls = useStepControls();

  const currentQuestion = questions[currentStep];
  const selectedAnswer =
    useGetUserAnswer(currentQuestion?.id)?.optionId ?? null;
  const isLast = currentStep === questions.length - 1;

  const answerQuestion = useAnswerQuestion();
  const ensureAnswer = useEnsureAnswer();

  const { mutate: finishTest } = useFinishTest();
  const { data: image, isLoading } = useQuestionPhoto(
    currentQuestion.photoName
  );

  const handleComplete = () => {
    const finalAnswers = useTestStore.getState().answers;

    finishTest({
      userId: user!.id,
      answers: finalAnswers,
    });
  };

  const handleNextStep = () => {
    ensureAnswer();
    if (!isLast) {
      controls.nextStep();
      return;
    }

    handleComplete();
  };

  return (
    <>
      <div className="container">
        <div className={styles.pageContainer}>
          <div className={styles.pageWrapper}>
            <div className={styles.infoWrapper}>
              <Badge color="primary">{nomination?.name}</Badge>
              <Badge color="secondary">
                Вопрос {currentStep + 1} из {questions.length}
              </Badge>
              <Timer
                finishedAt={finishedAt!}
                onComplete={() => {
                  ensureAnswer();
                  handleComplete();
                }}
              />
            </div>

            <div className={styles.question}>
              <h1>{currentQuestion.text}</h1>

              {!currentQuestion.photoName ? null : isLoading ? (
                <Skeleton className={styles.testImage} />
              ) : (
                <img alt="image-test" className={styles.testImage} src={image} />
              )}

              <div className={styles.stripe}></div>
              {currentQuestion.options.map((option) => (
                <div key={option.id} className={styles.radio}>
                  <input
                    type="radio"
                    checked={selectedAnswer === option.id}
                    id={option.id.toString()}
                    name="options"
                    onChange={() =>
                      answerQuestion({
                        questionId: currentQuestion.id,
                        optionId: option.id,
                      })
                    }
                  />
                  <label htmlFor={option.id.toString()}>{option.answer}</label>
                </div>
              ))}
            </div>

            <div className={styles.progressContainer}>
              <Button
                disabled={currentStep === 0}
                size="s"
                variant="outline"
                onClick={() => {
                  ensureAnswer();
                  controls.prevStep();
                }}
              >
                Назад
              </Button>

              <div className={styles.progressBar}>
                <div
                  style={{
                    width: `${((currentStep + 1) / questions.length) * 100}%`,
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
          </div>
        </div>
      </div>
      <img alt="wave" className={styles.waveMask} src="/wave-mask.png" />
    </>
  );
};
