import { getRouteApi } from "@tanstack/react-router";

import { Button, Input } from "@shared/ui";
import ButtonLink from "@shared/ui/button/ButtonLink";
import Textarea from "@shared/ui/input/Textarea";

import styles from "./questionsForm.module.css";

const route = getRouteApi("/_adminLayout/admin/nominations/$nominationId");

const CreateQuestionPage = () => {
  const { nominationId } = route.useParams();
  const {} = route.useLoaderData();

  return (
    <div className={styles.test}>
      <h1>Вопросы</h1>

      <label htmlFor="name">Вопрос</label>
      <Textarea id="name" />

      <label htmlFor="1var">1 вариант</label>
      <Input id="1var" />
      <label htmlFor="2var">2 вариант</label>
      <Input id="2var" />
      <label htmlFor="3var">3 вариант</label>
      <Input id="3var" />
      <label htmlFor="4var">4 вариант</label>
      <Input id="4var" />

      <Button size="l" color="secondary">
        Добавить вариант ответа
      </Button>

      <label htmlFor="correct">Правильный ответ</label>
      <Input id="correct" />

      <div className={styles.btns}>
        <Button size="l" color="primary">
          Сохранить
        </Button>

        <ButtonLink
          size="l"
          color="danger"
          to="/admin/nominations/$nominationId/questions"
          params={{ nominationId }}
        >
          Отменить
        </ButtonLink>
      </div>
    </div>
  );
};

export default CreateQuestionPage;
