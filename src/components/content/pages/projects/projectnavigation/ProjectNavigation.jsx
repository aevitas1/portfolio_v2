import styles from "./projectnavigation.module.scss";
import { useContext } from "react";
import AppContext from "../../../../../data/AppContext";
import { NavLink } from "react-router-dom";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { GoDot, GoDotFill } from "react-icons/go";
import ProjectData from "../../../../../data/ProjectData";

const ProjectNavigation = ({ item }) => {
  const { toggleScheme } = useContext(AppContext);

  const FindIndex = ProjectData.findIndex((a) => a.id === item.id);

  const nav = {
    previous: FindIndex === 0 ? "" : ProjectData[FindIndex - 1].uri,
    next: FindIndex === ProjectData.length - 1 ? "" : ProjectData[FindIndex + 1].uri,
    projectCount: ProjectData.length,
  };

  return (
    <div
      className={
        toggleScheme ? `${styles.project_navigation} ${styles.dark}` : styles.project_navigation
      }
    >
      <NavLink
        to={`/projects/${nav.previous}`}
        className={
          nav.previous === ""
            ? `${styles.disabled} ${styles.pagination_btn}`
            : styles.pagination_btn
        }
      >
        <AiOutlineCaretLeft /> Previous
      </NavLink>

      <div className={styles.nav_back}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {ProjectData.map((item, index) =>
            index === FindIndex ? (
              <GoDotFill key={index} style={{ fontSize: "1.2rem" }} />
            ) : (
              <GoDot key={index} />
            )
          )}
        </div>
        <NavLink to="/projects" className={styles.pagination_btn}>
          Back
        </NavLink>
      </div>

      <NavLink
        to={`/projects/${nav.next}`}
        className={
          nav.next === "" ? `${styles.disabled} ${styles.pagination_btn}` : styles.pagination_btn
        }
      >
        Next <AiOutlineCaretRight />
      </NavLink>
    </div>
  );
};

export default ProjectNavigation;
