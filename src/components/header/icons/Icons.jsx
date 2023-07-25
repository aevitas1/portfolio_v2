import { useContext } from "react";
import styles from "./icons.module.scss";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import ColorSchemeToggle from "../colorschemetoggle/ColorSchemeToggle";
import AppContext from "../../../data/AppContext";

const Icons = () => {
  const { toggleScheme } = useContext(AppContext);
  return (
    <>
      <div className={toggleScheme ? `${styles.icon_wrapper} ${styles.dark}` : styles.icon_wrapper}>
        <a href="https://nl.linkedin.com/in/stephan-vd-m" rel="noreferrer" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aevitas1" rel="noreferrer" target="_blank">
          <FaGithubSquare />
        </a>
        <a href="mailto: info@stephanvdmeijden.com" rel="noreferrer" target="_blank">
          <BsFillEnvelopeFill />
        </a>
        <ColorSchemeToggle />
      </div>
    </>
  );
};

export default Icons;
