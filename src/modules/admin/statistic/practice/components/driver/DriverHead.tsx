import styles from "../../../statistic.module.css";

export const DriverHead = () => (
  <thead>
    <tr>
      <th className={styles.printNotRotate} rowSpan={2}>
        Филиал
      </th>
      <th rowSpan={2}>№ линии</th>
      <th className={styles.printNotRotate} rowSpan={2}>
        Фио
      </th>
      <th className={styles.printNotRotate} colSpan={4}>
        Теоретические задания (Знание ПДД)
      </th>
      <th className={styles.printNotRotate} colSpan={5}>
        Практические задания (Скоростное маневрирование)
      </th>
      <th className={styles.printNotRotate} colSpan={4}>
        Итоговый расчет
      </th>
    </tr>
    <tr>
      <th>Количество правильных ответов</th>
      <th>Затраченное время</th>
      <th>Занятое место</th>
      <th>Количество очков</th>

      <th>Количество штрафных баллов за ошибки</th>
      <th>Время, затраченное на прохождение дистанции</th>
      <th>Сумма баллов</th>
      <th>Занятое место</th>
      <th>Количество очков</th>

      <th>Количество очков начисленных за соревнования по ПДД</th>
      <th>
        Количество очков, начисленных за соревнования по скоростному
        маневрированию
      </th>
      <th>Общее количество очков</th>
      <th>Итоговое место</th>
    </tr>
  </thead>
);
