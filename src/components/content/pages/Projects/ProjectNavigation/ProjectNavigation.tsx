import styles from "./ProjectNavigation.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const ProjectNavigation = () => {
  const projectPath = useLocation();
  return (
    <div className={styles.project_navigation}>
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
            ? styles.disabled
            : ""
        }
      >
        <AiOutlineCaretLeft /> Previous
      </NavLink>

      <NavLink to="/projects">Back</NavLink>

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
            ? styles.disabled
            : ""
        }
      >
        Next <AiOutlineCaretRight />
      </NavLink>
    </div>
  );
};

export default ProjectNavigation;
