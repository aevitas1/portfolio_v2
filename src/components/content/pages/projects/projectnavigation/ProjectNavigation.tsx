import styles from "./projectnavigation.module.scss";
import { useContext } from "react";
import { AppContext } from "../../../../../context/AppContext";
import { NavLink } from "react-router-dom";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

type navigationProps = {
  next: string;
  previous: string;
  firstProject: boolean;
  lastProject: boolean;
};

const ProjectNavigation = (props: navigationProps) => {
  const { toggleScheme } = useContext(AppContext);
  return (
    <div
      className={
        toggleScheme
          ? `${styles.project_navigation} ${styles.dark}`
          : styles.project_navigation
      }
    >
      <NavLink
        to={props.firstProject ? "" : props.previous}
        className={
          props.firstProject
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
        to={props.lastProject ? "" : props.next}
        className={
          props.lastProject
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
