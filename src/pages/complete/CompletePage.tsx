import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

import { useResult } from "@features/user/test-passing/model/testStore";

import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "./CompletePage.module.css";

const CompletePage = () => {
  const result = useResult();
  if (!result) {
    return "Не удалось получить результат";
  }

  const { nomination, score, total, user, duration } = result;
  const percentage = (score / total) * 100;

  const data = [
    { name: "Верно", value: percentage },
    { name: "Неверно", value: 100 - percentage },
  ];

  const COLORS = ["#45FF8C", "#FF4548"];

  return (
    <div className={styles.completePage}>
      <h1>Тест завершен</h1>
      <div className={styles.testInfo}>
        <p>Тест в номинации</p>
        <h2>«{nomination.name}»</h2>
      </div>
      <h3>
        Ваш результат {score} из {total}
      </h3>
      <p>Время прохождение {duration}</p>
      <p>Ваш номер: {user.number}</p>
      <div className={styles.saveButtonContainer}>
        <h2>Вы можете сохранить свои результаты для этого нажмите на кнопку</h2>
        <ButtonLink size="m" to="/">
          Перейти далее
        </ButtonLink>
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
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <img src="/wave-mask.png" alt="wave" className={styles.wave} />
    </div>
  );
};

export default CompletePage;
