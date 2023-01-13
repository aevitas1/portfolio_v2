import styles from "./topbar.module.scss";
import Icons from "../icons/Icons";
import Logo from "../logo/Logo";
import MobileMenu from "../../Navigation/mobilemenu/MobileMenu";

const Topbar = () => {
  return (
    <div className={styles.top_bar}>
      <Logo />
      <Icons />
      <MobileMenu />
    </div>
  );
};

export default Topbar;
