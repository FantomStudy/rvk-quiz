import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

import { Button } from "@shared/ui";

import styles from "./CompletePage.module.css";

const CompletePage = () => {
  const data = [
    { name: "Верно", value: 75 },
    { name: "Неверно", value: 25 },
  ];
  const COLORS = ["#45FF8C", "#FF4548"];
  return (
    <div className={styles.completePage}>
      <h1>Тест завершен</h1>
      <div className={styles.testInfo}>
        <p>Тест в номинации</p>
        <h2>«Водитель ЗИЛ 312670»</h2>
      </div>
      <h3>Ваш результат 15 из 25</h3>
      <p>Время прохождение 35 мин 45 сек</p>
      <p>Ваш номер: 7887878</p>
      <div className={styles.saveButtonContainer}>
        <h2>Вы можете сохранить свои результаты для этого нажмите на кнопку</h2>
        <Button size="m">Перейти далее</Button>
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
