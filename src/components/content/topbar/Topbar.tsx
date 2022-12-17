import styles from "./topbar.module.scss";
import Icons from "../Icons/Icons";
import Logo from "../logo/Logo";
import MobileMenu from "../mobilemenu/MobileMenu";

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
