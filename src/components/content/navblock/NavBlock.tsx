import styles from "./navblock.module.scss";
import Credits from "../Credits/Credits";
import Menu from "../Menu/Menu";

const NavBlock = () => {
  return (
    <>
      <nav className={styles.nav_wrapper}>
        <div className={styles.nav_body}>
          <Menu />
        </div>
        <div className={styles.nav_footer}>
          <Credits />
        </div>
      </nav>
    </>
  );
};

export default NavBlock;
