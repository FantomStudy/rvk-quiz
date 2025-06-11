import Timer from "@widgets/Timer";

import { useFinishTest } from "@features/user/test-passing/model/mutations";
import { useTestStore } from "@features/user/test-passing/model/testStore";

import { useQuestionPhoto } from "@entities/question/model/queries";

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
  const selected = selectedAnswer?.optionId;
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
          <Timer
            duration={nomination!.duration}
            onEnd={() =>
              mutate({
                answers,
                userId: user!.id,
              })
            }
          />

          <form className={styles.form}>
            <h1>{questions[currentStep].text}</h1>
            {isLoading || !currentQuestion.photoName ? null : (
              <img src={image} alt="image" />
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
          <Button size="s" color="secondary">
            Вопрос {currentStep + 1} из {questions.length}
          </Button>
          <Button size="s" color="primary">
            {nomination?.name}
          </Button>
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
      <img src="/wave-mask.png" alt="wave" className={styles.wave} />
    </>
  );
};
export default TestPage;
