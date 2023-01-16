import styles from "./pages.module.scss";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className={`${styles.page_wrapper}`}>
        <div className={styles.project_container}>
          <NavLink to="/projects/portfolio">This portfolio</NavLink>
          <NavLink to="/projects/foodfreedom">Foodfreedom</NavLink>
          <NavLink to="/projects/tibia_damage_calculator">
            Tibia damage calculator
          </NavLink>
          <NavLink to="/projects/quiz">Quiz</NavLink>
          <NavLink to="/projects/movies">Movies</NavLink>
          <NavLink to="/projects/memory">Memory game</NavLink>
          <NavLink to="/projects/calculator">Calculator</NavLink>
        </div>
      </div>
    </>
  );
};

export default Projects;
