import styles from "./topbar.module.scss";
import Icons from "../icons/Icons";
import Logo from "../logo/Logo";
import MobileMenu from "../../navigation/mobilemenu/MobileMenu";

const Topbar = () => {
  return (
    <div className={styles.top_bar}>
      <div className={styles.logo_icons}>
        <Logo />
        <Icons />
      </div>
      <MobileMenu />
    </div>
  );
};

export default Topbar;
