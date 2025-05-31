import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

import styles from "../styles/AdminLayout.module.css";

export const Route = createFileRoute("/_adminLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="container">
      <div className={`${styles.wrapper}`}>
        <div className={styles.sidebar}>
          <img src="/logo/master-logo.svg" alt="master-logo" />
          <nav className={styles.nav}>
            <Link
              to="/admin/nominations"
              activeProps={{ className: styles.active }}
            >
              Номинации
            </Link>
            <Link
              to="/admin/analytic"
              activeProps={{ className: styles.active }}
            >
              Участники
            </Link>
            <Link
              to="/admin/analytic"
              activeProps={{ className: styles.active }}
            >
              Результаты
            </Link>
            <Link
              to="/admin/analytic"
              activeProps={{ className: styles.active }}
            >
              Аналитика
            </Link>
            <Link
              to="/admin/analytic"
              activeProps={{ className: styles.active }}
            >
              Филиал
            </Link>
          </nav>
        </div>

        <div className={styles.workArea}>
          <header className={styles.header}>
            <img src="/logo/rvk-logo.svg" alt="rvk-logo" />
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
