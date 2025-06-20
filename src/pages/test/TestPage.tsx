import Timer from "@widgets/timer/Timer";

import { useTestStore } from "@features/test-pass/store/testStore";
import { useFinishTest } from "@features/test-session";

import { useQuestionPhoto } from "@entities/question/model/question.queries";

import { Button } from "@shared/ui";

import styles from "./TestPage.module.css";

const TestPage = () => {
  const {
    user,
    nomination,
    questions,
    answers,
    currentStep,
    nextStep,
    prevStep,
    answerQuestion,
    getAnswerForQuestion,
  } = useTestStore();
  const { mutate } = useFinishTest();

  const currentQuestion = questions[currentStep];
  const selectedAnswer = getAnswerForQuestion(currentQuestion?.id);
  const selected = selectedAnswer?.optionId ?? null;
  const isLast = currentStep === questions.length - 1;

  const { data: image, isLoading } = useQuestionPhoto(
    currentQuestion.photoName,
  );

  const handleNextStep = async () => {
    if (!isLast) {
      nextStep();
      return;
    }

    mutate({
      answers,
      userId: user!.id,
    });
  };

  return (
    <>
      <div className="container">
        <div className={styles.testPage}>
          <div className={styles.pageContainer}>
            <div className={styles.timerContainer}>
              <Timer
                duration={nomination!.duration}
                onEnd={() =>
                  mutate({
                    answers,
                    userId: user!.id,
                  })
                }
              />
            </div>

            <form className={styles.form}>
              <h1>{questions[currentStep].text}</h1>
              {isLoading || !currentQuestion.photoName ? null : (
                <img src={image} alt="image" className={styles.testImage} />
              )}

              <div className={styles.stripe}></div>
              {currentQuestion.options.map((option) => (
                <div className={styles.radio} key={option.id}>
                  <input
                    type="radio"
                    id={option.id.toString()}
                    name="options"
                    checked={selected === option.id}
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
            </form>
            <div className={styles.dataContainer}>
              <div className={styles.data}>
                <Button size="s" color="secondary">
                  Вопрос {currentStep + 1} из {questions.length}
                </Button>
                <Button size="s" color="primary">
                  {nomination?.name}
                </Button>
              </div>

              <div className={styles.progressBar}>
                <Button
                  size="s"
                  color="transparent"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Назад
                </Button>
                <progress
                  value={currentStep + 1}
                  max={questions.length}
                  className={styles.progress}
                />
                <Button size="s" color="danger" onClick={handleNextStep}>
                  {isLast ? "Завершить" : "Далее"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/wave-mask.png" alt="wave" className={styles.wave} />
    </>
  );
};
export default TestPage;
