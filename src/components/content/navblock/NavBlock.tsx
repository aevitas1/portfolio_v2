import styles from "./navblock.module.scss";
const NavBlock = () => {
  return (
    <>
      <nav className={styles.nav_wrapper}>
        <div className={styles.nav_header}>
          <h1>Test</h1>
        </div>
        <div className={styles.nav_body}>
          <h1>Test</h1>
        </div>
        <div className={styles.nav_footer}>
          <h1>Test</h1>
        </div>
      </nav>
    </>
  );
};

export default NavBlock;
