import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const Menu = () => {
  const { openMobile, setOpenMobile } = useContext(AppContext);
  return (
    <>
      <div className={styles.nav_menu}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => (openMobile ? setOpenMobile(false) : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => (openMobile ? setOpenMobile(false) : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="../projects"
              onClick={() => (openMobile ? setOpenMobile(false) : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="../contact"
              onClick={() => (openMobile ? setOpenMobile(false) : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
