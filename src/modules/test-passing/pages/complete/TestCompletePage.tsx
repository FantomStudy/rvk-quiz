import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

import { ButtonLink } from "@/components/ui";
import { useResults } from "@/store";

import styles from "./TestCompletePage.module.css";

const COLORS = ["#45FF8C", "#FF4548"];

export const TestCompletePage = () => {
  const result = useResults();
  if (!result) {
    return "Не удалось получить результат";
  }

  const { nomination, score, duration, user } = result;

  const DIAGRAM_DATA = [
    {
      name: "Верно",
      value: result.percentage,
    },
    {
      name: "Неверно",
      value: 100 - result.percentage,
    },
  ];

  return (
    <div className={styles.completePage}>
      <div className={styles.completeInfo}>
        <h1>Тест завершен</h1>
        <div className={styles.testInfo}>
          <p>Тест в номинации</p>
          <h2>«{nomination.name}»</h2>
        </div>
        <h3>
          Ваш результат {score} из {nomination.questionsCount}
        </h3>
        <p>Время прохождение {duration}</p>
        <p>Ваш номер: {user.number}</p>
        <div className={styles.saveButtonContainer}>
          <ButtonLink to="/result">Просмотр результатов</ButtonLink>
        </div>
      </div>
      <PieChart height={400} width={400}>
        <Pie
          label
          cx="50%"
          cy="50%"
          data={DIAGRAM_DATA}
          dataKey="value"
          fill="#8884d8"
          outerRadius={150}
        >
          {DIAGRAM_DATA.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
