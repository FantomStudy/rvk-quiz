import { Link, Outlet } from "@tanstack/react-router";

import styles from "./AdminLayout.module.css";

const NAV_LINKS = [
  { to: "/admin/nominations", label: "Номинации" },
  { to: "/admin/results", label: "Результаты" },
  { to: "/admin/dashboard", label: "Аналитика" },
  { to: "/admin/branches", label: "Филиал" },
];

export const AdminLayout = () => {
  return (
    <div className="container">
      <div className={`${styles.wrapper}`}>
        <div className={styles.sidebar}>
          <Link to="/" replace>
            <img src="/logo/master-logo.svg" alt="master-logo" />
          </Link>
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <Link
                to={link.to}
                key={link.to}
                activeProps={{ className: styles.active }}
              >
                {link.label}
              </Link>
            ))}
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
};
