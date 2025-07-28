import {
  useAnswerQuestion,
  useCurrentStep,
  useEnsureAnswer,
  useGetUserAnswer,
  useSessionData,
  useStepControls,
} from "@/store/selectors";

import { useFinishTest, useQuestionPhoto } from "../../api/queries";
import styles from "./TestPage.module.css";
import { useTestStore } from "@/store/TestStore";
import { Badge, Button, Skeleton } from "@/components/ui";
import { Timer } from "@/components";

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
                <img src={image} alt="image" className={styles.testImage} />
              )}

              <div className={styles.stripe}></div>
              {currentQuestion.options.map((option) => (
                <div className={styles.radio} key={option.id}>
                  <input
                    type="radio"
                    name="options"
                    id={option.id.toString()}
                    checked={selectedAnswer === option.id}
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
                size="s"
                variant="outline"
                onClick={() => {
                  ensureAnswer();
                  controls.prevStep();
                }}
                disabled={currentStep === 0}
              >
                Назад
              </Button>

              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarFill}
                  style={{
                    width: `${((currentStep + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>

              <Button
              size="s"
                variant="danger"
                onClick={handleNextStep}
                className={styles.button}
              >
                {isLast ? "Завершить" : "Далее"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img src="/wave-mask.png" alt="wave" className={styles.waveMask} />
    </>
  );
};
