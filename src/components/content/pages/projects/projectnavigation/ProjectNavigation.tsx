import styles from "./ProjectNavigation.module.scss";
import { useContext } from "react";
import { AppContext } from "../../../../../context/AppContext";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const ProjectNavigation = () => {
  const projectPath = useLocation();
  const { toggleScheme } = useContext(AppContext);
  return (
    <div
      className={
        toggleScheme ? `${styles.project_navigation} ${styles.dark}` : ""
      }
    >
      <NavLink
        to={
          projectPath.pathname === "/projects/memory"
            ? "/projects/foodfreedom"
            : projectPath.pathname === "/projects/calculator"
            ? "/projects/memory"
            : projectPath.pathname === "/projects/tibia_damage_calculator"
            ? "/projects/calculator"
            : "#"
        }
        className={
          projectPath.pathname === "/projects/foodfreedom"
            ? `${styles.disabled} ${styles.pagination_btn}`
            : styles.pagination_btn
        }
      >
        <AiOutlineCaretLeft /> Previous
      </NavLink>

      <NavLink to="/projects" className={styles.pagination_btn}>
        Back
      </NavLink>

      <NavLink
        to={
          projectPath.pathname === "/projects/foodfreedom"
            ? "/projects/memory"
            : projectPath.pathname === "/projects/memory"
            ? "/projects/calculator"
            : projectPath.pathname === "/projects/calculator"
            ? "/projects/tibia_damage_calculator"
            : "#"
        }
        className={
          projectPath.pathname === "/projects/tibia_damage_calculator"
            ? `${styles.disabled} ${styles.pagination_btn}`
            : styles.pagination_btn
        }
      >
        Next <AiOutlineCaretRight />
      </NavLink>
    </div>
  );
};

export default ProjectNavigation;
