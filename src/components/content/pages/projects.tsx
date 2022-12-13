import { useState } from "react";
import Pagination from "../Pagination/pagination";
import PageOne from "./Projects/pageone";
import PageTwo from "./Projects/pagetwo";
import PageThree from "./Projects/pagethree";
import PageFour from "./Projects/pagefour";
import styles from "./pages.module.scss";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 4;

  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.project_page}>
          <div className={styles.projects}>
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
          <Pagination
            currentPage={currentPage}
            lastPage={lastPage}
            maxLength={4}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
