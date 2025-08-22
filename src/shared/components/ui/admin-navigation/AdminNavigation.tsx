import { Link } from "@tanstack/react-router";

import styles from "./AdminNavigation.module.css";

export const AdminNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to="/admin/users">Главная</Link>
      <Link to="/admin/dashboard">Результаты</Link>
      <Link to="/statistic/theory">Теоретические</Link>
      <Link to="/statistic/practice">Практические</Link>
      <Link to="/statistic/common">Общие результаты</Link>
    </nav>
  );
};
