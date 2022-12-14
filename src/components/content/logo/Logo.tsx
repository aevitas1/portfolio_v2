import { useContext } from "react";
import styles from "./logo.module.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

export const Logo = () => {
  const { openMobile, setOpenMobile } = useContext(AppContext);
  return (
    <>
      <Link
        className={styles.logo_wrapper}
        to="/"
        onClick={() => (openMobile ? setOpenMobile(false) : "")}
      >
        <div className={styles.logo}>
          <h3>Stephan van der Meijden</h3>
          <h4>Front-end Developer</h4>
        </div>
      </Link>
    </>
  );
};

export default Logo;
