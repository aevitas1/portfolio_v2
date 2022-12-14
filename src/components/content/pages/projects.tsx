import { useContext } from "react";
import PageOne from "./Projects/pageone";
import PageTwo from "./Projects/pagetwo";
import PageThree from "./Projects/pagethree";
import PageFour from "./Projects/pagefour";
import styles from "./pages.module.scss";
import { AppContext } from "../../../context/AppContext";

const Projects = () => {
  const { currentPage } = useContext(AppContext);
  return (
    <>
      <div className={`${styles.page_wrapper}`}>
        <div className={styles.project_container}>
          {currentPage === 1 && (
            <>
              <PageOne />
            </>
          )}
          {currentPage === 2 && (
            <>
              <PageTwo />
            </>
          )}
          {currentPage === 3 && (
            <>
              <PageThree />
            </>
          )}
          {currentPage === 4 && (
            <>
              <PageFour />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
