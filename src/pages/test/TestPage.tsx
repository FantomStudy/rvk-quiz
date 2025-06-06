import { useState } from "react";

import CurrentTime from "@widgets/CurrentTime";
import Timer from "@widgets/Timer";

import { useFinishTest } from "@features/user/test-passing/model/mutations";
import { useTestStore } from "@features/user/test-passing/model/testStore";

import { Button } from "@shared/ui";
import ButtonLink from "@shared/ui/button/ButtonLink";

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
  const { mutateAsync } = useFinishTest();

  const currentQuestion = questions[currentStep];
  const selectedAnswer = getAnswerForQuestion(currentQuestion?.id);
  const selected = selectedAnswer?.optionId;
  const isLast = currentStep === questions.length - 1;

  const handleNextStep = async () => {
    if (!isLast) {
      nextStep();
      return;
    }

    try {
      console.log("📤 Завершаем тест, отправляем данные:");
      console.log("answers:", answers);
      console.log("userId:", user?.id);

      await mutateAsync({
        answers,
        userId: user!.id,
      });

      console.log("✅ Тест успешно завершён");
      // TODO: переход на страницу результата
    } catch (error) {
      console.error("❌ Ошибка при завершении теста:", error);

      // Вариант логов, если ошибка от сервера содержит response
      if (error instanceof Error && "response" in error) {
        console.error("Ответ сервера:", (error as any).response);
      }

      alert("Произошла ошибка при завершении теста. Проверьте консоль.");
    }
  };

  return (
    <>
      <div className="container">
        <div className={styles.testPage}>
          <Timer initialMinutes={45} initialSeconds={30} />

          <form className={styles.form}>
            <h1>{questions[currentStep].text}</h1>
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
          <CurrentTime />
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
