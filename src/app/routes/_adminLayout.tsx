import {
  Link,
  Outlet,
  createFileRoute,
  redirect,
} from "@tanstack/react-router";

import { checkAuthQueryOptions } from "@features/admin/auth";

import styles from "../styles/AdminLayout.module.css";

export const Route = createFileRoute("/_adminLayout")({
  component: LayoutComponent,
  beforeLoad: async ({ context }) => {
    const redirectToLogin = () => {
      throw redirect({ to: "/admin" });
    };

    try {
      const isAdmin = await context.queryClient.ensureQueryData(
        checkAuthQueryOptions(),
      );

      if (!isAdmin) {
        redirectToLogin();
      }
    } catch {
      redirectToLogin();
    }
  },
});

function LayoutComponent() {
  const links = [
    { to: "/admin/nominations", label: "Номинации" },
    { to: "/admin/members", label: "Участники" },
    { to: "/admin/results", label: "Результаты" },
    { to: "/admin/analytic", label: "Аналитика" },
    { to: "/admin/branches", label: "Филиал" },
  ];

  return (
    <div className="container">
      <div className={`${styles.wrapper}`}>
        <div className={styles.sidebar}>
          <img src="/logo/master-logo.svg" alt="master-logo" />
          <nav className={styles.nav}>
            {links.map((link) => (
              <Link
                to={link.to}
                key={link.to}
                preload="intent"
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
}
