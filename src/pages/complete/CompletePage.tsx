import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

import { useResult } from "@features/test-pass/store/testStore";

import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "./CompletePage.module.css";

const CompletePage = () => {
  const result = useResult();
  if (!result) {
    return "Не удалось получить результат";
  }

  const { nomination, score, user, duration, percentage } = result;

  const data = [
    { name: "Верно", value: percentage },
    { name: "Неверно", value: 100 - percentage },
  ];

  const COLORS = ["#45FF8C", "#FF4548"];

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
          <ButtonLink to="/test-results">Просмотр результатов</ButtonLink>
        </div>
      </div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CompletePage;
