import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.headerWrapper}>
          <img alt="master-logo" src="/logo/master-logo.png" />
          <img alt="rvk-logo" src="/logo/rvk-logo.png" />
        </div>
      </div>
    </header>
  );
};
