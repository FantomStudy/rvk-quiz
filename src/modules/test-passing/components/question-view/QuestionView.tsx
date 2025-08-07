import type { ChangeEvent } from "react";

import { Skeleton } from "@/components/ui";
import { useAnswerQuestion, useUserAnswers } from "@/store";

import { useQuestionPhoto } from "../../api";
import { useCurrentQuestion } from "./hooks";

import styles from "./QuestionView.module.css";

export const QuestionView = () => {
  const question = useCurrentQuestion();

  const selectedAnswer = useUserAnswers(question.id)?.optionId ?? null;
  const photoImage = useQuestionPhoto(question.photoName);

  const answerQuestion = useAnswerQuestion();

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    answerQuestion({
      questionId: question.id,
      optionId: Number(e.target.id),
    });
  };

  return (
    <div className={styles.question}>
      <h1>{question.text}</h1>

      {!question.photoName ? null : photoImage.isLoading ? (
        <Skeleton className={styles.testImage} />
      ) : (
        <img
          alt="image-test"
          className={styles.testImage}
          src={photoImage.data}
        />
      )}

      <div className={styles.stripe}></div>
      {question.options.map((option) => (
        <div key={option.id} className={styles.radio}>
          <input
            type="radio"
            checked={selectedAnswer === option.id}
            id={option.id.toString()}
            name="options"
            onChange={handleAnswerChange}
          />
          <label htmlFor={option.id.toString()}>{option.answer}</label>
        </div>
      ))}
    </div>
  );
};
