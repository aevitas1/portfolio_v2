import styles from "./mobilemenu.module.scss";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const MobileMenu = () => {
  const { openMobile, setOpenMobile, toggleScheme } = useContext(AppContext);

  return (
    <>
      <div
        className={
          toggleScheme
            ? `${styles.dark} ${styles.mobile_menu_wrapper}`
            : styles.mobile_menu_wrapper
        }
      >
        <div
          className={styles.mobile_toggle_wrapper}
          onClick={() =>
            openMobile ? setOpenMobile(false) : setOpenMobile(true)
          }
        >
          <div
            className={
              openMobile
                ? `${styles.mobile_toggle} ${styles.active}`
                : styles.mobile_toggle
            }
          >
            <div className={styles.top_bar}></div>
            <div className={styles.middle_bar}></div>
            <div className={styles.bottom_bar}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
