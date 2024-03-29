import { useContext } from "react";
import styles from "./navblock.module.scss";
import Credits from "../credits/Credits";
import Menu from "../menu/Menu";
import AppContext from "../../../data/AppContext";
import Icons from "../../header/icons/Icons";

const NavBlock = () => {
  const { openMobile, toggleScheme } = useContext(AppContext);

  return (
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
      <Icons />
      <div className={styles.nav_content}>
        <div className={styles.nav_body}>
          <Menu />
        </div>
        <div className={styles.nav_footer}>
          <Credits />
        </div>
      </div>
    </nav>
  );
};

export default NavBlock;
