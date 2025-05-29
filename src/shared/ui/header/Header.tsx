import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.headerWrapper}>
          <img src="/logo/master-logo.png" alt="master-logo" />

          <img
            src="/logo/rvk-logo.png"
            alt="rosvodokanal-logo"
            className={styles.centerElement}
          />
        </div>
      </div>
    </header>
  );
};
