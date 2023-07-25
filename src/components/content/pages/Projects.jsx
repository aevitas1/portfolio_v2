import styles from "./pages.module.scss";
import { NavLink } from "react-router-dom";
import ProjectData from "../../../data/ProjectData";

const Projects = () => {
  return (
    <div className={`${styles.page_wrapper}`}>
      <div className={styles.project_container}>
        {ProjectData.map((item, index) => (
          <NavLink key={index} to={`/projects/${item.uri}`}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Projects;
