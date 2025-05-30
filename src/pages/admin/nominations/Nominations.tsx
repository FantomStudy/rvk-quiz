import { Button } from "@shared/ui";
import styles from "./Nominations.module.css";

const Nominations = () => {
  return <div className={styles.nominations}>
    <h1>Номинации</h1>

    <table>
      <thead>
        <tr>
        <th>Номинация</th>
      <th>Вопросов в базе</th>
      <th>Вопросов в тесте</th>
      <th>Вопросы</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ПДД категории В</td>
          <td>135</td>
          <td>25</td>
          <Button>Добавить</Button>
        </tr>
        <tr>
          <td>ПДД категории А</td>
          <td>105</td>
          <td>30</td>
          <Button>Добавить</Button>
        </tr>
        <tr>
          <Button>Добавить номинацию</Button>
        </tr>
      </tbody>
    </table>
  </div>;
};

export default Nominations;
