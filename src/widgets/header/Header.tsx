import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.headerWrapper}>
          <img src="/logo/master-logo.svg" alt="master-logo" />

          <img src="/logo/rvk-logo.svg" alt="rosvodokanal-logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
