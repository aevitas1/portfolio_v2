import { useContext } from "react";
import styles from "./navblock.module.scss";
import Credits from "../Credits/Credits";
import Menu from "../Menu/Menu";
import { AppContext } from "../../../context/AppContext";

const NavBlock = () => {
  const { openMobile, toggleScheme } = useContext(AppContext);
  return (
    <>
      <nav
        className={
          openMobile
            ? toggleScheme
              ? `${styles.nav_wrapper} ${styles.active} ${styles.dark}`
              : `${styles.nav_wrapper} ${styles.active}`
            : toggleScheme
            ? `${styles.nav_wrapper} ${styles.dark}`
            : styles.nav_wrapper
        }
      >
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
